import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

import Header from './Header';
import RestaurantsContainer from '../../containers/RestaurantsContainer';
import Restaurant from '../restaurants/Restaurant';

import { clearRestaurants } from '../../actions/apiActions';

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
        <Header
          username={this.props.username}
          handleLogout={this.handleLogout}
          clearRestaurants={this.props.clearRestaurants}
        />
        <Route path='/search'>
          <RestaurantsContainer />
        </Route>
        <Route path='/restaurants/:id'>
          <Restaurant />
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
