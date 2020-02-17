import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import RestaurantForm from '../restaurants/RestaurantForm';

class Home extends Component {
  constructor(props) {
    super(props);

class Home extends Component {
  state = {
      redirect: false
    };

  checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in && this.props.loginStatus === 'NOT_LOGGED_IN') {
          this.props.loginUser(res.data.user);
        } else if (
          !res.data.logged_in &&
          this.props.loginStatus === 'LOGGED_IN'
        ) {
          this.props.logoutUser();
        } else if (
          !res.data.logged_in &&
          this.props.loginStatus === 'NOT_LOGGED_IN'
        ) {
          this.setState({
            redirect: true
          });
        }
      })
      .catch((error) => console.log(error.response));
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((res) => {
        this.props.logoutUser();
        this.setState({
          redirect: true
        });
      })
      .catch((error) => error);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/login' />;
    }
    console.log('home:', this);
    return (
      <>
        <NavBar
          username={this.props.username}
          handleLogout={this.handleLogout}
        />
        <RestaurantsContainer />
      </>
    );
  }
}

export default Home;
