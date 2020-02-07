import React, { Component } from 'react';
import { connect } from 'react-redux';

import './assets/stylesheets/App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/views/Home';

import { loginUser, logoutUser } from './actions/authActions';

class App extends Component {
  render() {
    console.log('app:', this);
    return (
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login loginUser={this.props.loginUser} />
          </Route>
          <Route path='/signup'>
            <Signup loginUser={this.props.loginUser} />
          </Route>
          <Route path='/home'>
            <Home
              username={this.props.username}
              loginStatus={this.props.loginStatus}
              loginUser={this.props.loginUser}
              logoutUser={this.props.logoutUser}
            />
          </Route>
          <Redirect to='/login' />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.authReducer.user.username,
  loginStatus: state.authReducer.loginStatus
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
