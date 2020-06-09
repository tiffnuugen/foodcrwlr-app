import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

import Header from './Header';
import RestaurantsContainer from '../../containers/RestaurantsContainer';
import RestaurantDetailsContainer from '../../containers/RestaurantDetailsContainer';

import { clearRestaurants } from '../../actions/yelpActions';

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
            redirect: true
          });
        }
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          this.setState({
            redirect: true
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
          redirect: true
        });
      })
      .catch((error) => console.log(error.response));
  };

  render() {
    const { username, clearRestaurants } = this.props;
    if (this.state.redirect) {
      return <Redirect to='/login' />;
    }
    return (
      <>
        <Header
          username={username}
          handleLogout={this.handleLogout}
          clearRestaurants={clearRestaurants}
        />
        <Route path='/search'>
          <RestaurantsContainer />
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

const mapDispatchToProps = (dispatch) => ({
  clearRestaurants: () => dispatch(clearRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
