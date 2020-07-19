import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

import Header from './Header';
import RestaurantListContainer from '../../containers/RestaurantListContainer';
import RestaurantDetailsContainer from '../../containers/RestaurantDetailsContainer';

class Home extends Component {
  state = {
    redirect: false
  };

  checkLoginStatus = () => {
    const { loginStatus, loginUser, logoutUser } = this.props;
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in && loginStatus === 'NOT_LOGGED_IN') {
          loginUser(res.data.user);
        } else if (!res.data.logged_in && loginStatus === 'LOGGED_IN') {
          logoutUser();
        } else if (!res.data.logged_in && loginStatus === 'NOT_LOGGED_IN') {
          this.setState({
            redirect: !this.state.redirect
          });
        }
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          this.setState({
            redirect: !this.state.redirect
          });
        }
      });
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        this.props.logoutUser();
        this.setState({
          redirect: !this.state.redirect
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
        <Header
          username={this.props.username}
          handleLogout={this.handleLogout}
        />
        <Route path='/search'>
          <RestaurantListContainer />
        </Route>
        <Route path='/restaurants/:id'>
          <RestaurantDetailsContainer />
        </Route>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.user.username
});

export default connect(mapStateToProps)(Home);
