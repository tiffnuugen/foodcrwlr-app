import React, { Component } from 'react';
import './assets/stylesheets/App.css';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/views/Home';
import Restaurants from './components/restaurants/Restaurants';
import Restaurant from './components/restaurants/Restaurant';

import { loginUser, logoutUser } from './actions/authActions';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login loginUser={this.props.loginUser} />
          </Route>
          <Route path='/signup'>
            <Signup loginUser={this.props.loginUser} />
          </Route>
          <Route path='/'>
            <Home
              loginStatus={this.props.loginStatus}
              loginUser={this.props.loginUser}
              logoutUser={this.props.logoutUser}
            />
          </Route>
          <Route exact path='/restaurants'>
            <Restaurants />
          </Route>
          <Route>
            <Restaurant path='/restaurants/:id' />
          </Route>
          <Redirect to='/login' />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.auth.loginStatus
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
