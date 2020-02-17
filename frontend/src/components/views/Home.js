import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import RestaurantsContainer from '../../containers/RestaurantsContainer';
import NavBar from './NavBar';

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
      .catch((error) => console.log(error.response));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/login' />;
    }
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

const mapStateToProps = (state) => ({
  username: state.authReducer.user.username
});

export default connect(mapStateToProps)(Home);
