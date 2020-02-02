import React, { Component } from 'react';
import '../../assets/stylesheets/Signup.css';

import { Route, Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      signupErrors: '',
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
    const { username, password, passwordConfirmation } = this.state;
    axios
      .post(
        'http://localhost:3001/registrations',
        {
          user: {
            username: username,
            password: password,
            passwordConfirmation: passwordConfirmation
          }
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === 'created') {
          this.props.loginUser(res.data.user);
          this.setState({
            redirect: true
          });
        }
      })
      .catch((error) => error);
    this.setState({
      username: '',
      password: '',
      passwordConfirmation: ''
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />;
    }
    console.log('signup:', this);
    return (
      <form
        className='signup ui center aligned container'
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
              <div className='field'>
                <label>Password Confirmation</label>
                <div className='ui left icon input'>
                  <input
                    type='password'
                    name='passwordConfirmation'
                    placeholder='Password Confirmation'
                    value={this.state.passwordConfirmation}
                    onChange={this.handleChange}
                  />
                  <i className='lock icon'></i>
                </div>
              </div>
              <button type='submit' className='ui primary button'>
                Sign up
              </button>
              <p>
                Already a user? <Link to='/login'>Log in</Link> here.
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;
