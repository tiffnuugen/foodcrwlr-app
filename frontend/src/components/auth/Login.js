import React, { Component } from 'react';
import '../../assets/stylesheets/Login.css';

import { Link, Redirect, Route } from 'react-router-dom';
import axios from 'axios';

// import Home from '../views/Home';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loginErrors: '',
      redirect: false
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post(
        'http://localhost:3001/sessions',
        {
          user: {
            username: username,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.logged_in === true) {
          this.props.loginUser(res.data.user);
          this.setState({
            redirect: true
          });
        }
      })
      .catch((error) => error);
    this.setState({
      username: '',
      password: ''
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />;
    }
    return (
      <form
        className='login ui center aligned container'
        onSubmit={this.handleSubmit}
      >
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>Username</label>
                <div className='ui left icon input'>
                  <input
                    type='username'
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <i className='user icon'></i>
                </div>
              </div>
              <div className='field'>
                <label>Password</label>
                <div className='ui left icon input'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <i className='lock icon'></i>
                </div>
              </div>
              <button type='submit' className='ui primary button'>
                Log in
              </button>
              <p>
                New to App? <Link to='/signup'>Sign up</Link> here.
              </p>
              {/* <div class='ui bottom attached warning message'>
                <i class='icon help'></i>
                New to App? <Link to='/signup'>Sign up</Link> here.
              </div> */}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
