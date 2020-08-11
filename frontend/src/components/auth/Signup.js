import React, { Component } from 'react';
import '../../assets/stylesheets/App.css';

import { Button, Form, Card, Container, Label, Icon } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    usernameError: '',
    passwordError: '',
    passwordConfirmationError: '',
    redirect: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirmation } = this.state;
    axios.get('http://localhost:3001/registrations').then((res) => {
      const user =
        res.data.users.find((user) => user.username === username) || '';
      const isInvalid =
        !username ||
        username.length < 3 ||
        user.username === username ||
        !password ||
        password.length < 3 ||
        !passwordConfirmation ||
        (username && password !== passwordConfirmation);
      if (isInvalid) {
        this.handleValidations(user);
      } else {
        axios
          .post(
            'http://localhost:3001/registrations',
            {
              user: {
                username: username,
                password: password
              }
            },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data.status === 'created') {
              this.props.loginUser(res.data.user);
              this.setState({
                username: '',
                password: '',
                passwordConfirmation: '',
                redirect: !this.state.redirect
              });
            }
          });
      }
    });
  };

  handleValidations = (user) => {
    const { username, password, passwordConfirmation } = this.state;
    this.setState({
      usernameError:
        (!username && "Can't be blank.") ||
        (username.length < 3 &&
          'Username must be at least 3 characters long.') ||
        (user.username === username && 'Username has already been taken.'),
      passwordError:
        (!password && "Can't be blank.") ||
        (password.length < 3 && 'Password must be at least 3 characters long.'),
      passwordConfirmationError:
        (!passwordConfirmation && "Can't be blank.") ||
        (password !== passwordConfirmation && 'Password must match.')
    });
  };

  render() {
    const {
      username,
      password,
      passwordConfirmation,
      redirect,
      usernameError,
      passwordError,
      passwordConfirmationError
    } = this.state;
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
      <Container className='signup background'>
        <Card centered={true}>
          <Card.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                autoComplete='new-username'
                name='username'
                value={username}
                onChange={this.handleChange}
              />
              {usernameError && (
                <Label className='signup error' basic color='red'>
                  <Icon name='warning circle' />
                  {usernameError}
                </Label>
              )}
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                placeholder='Password'
                autoComplete='new-password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              {passwordError && (
                <Label className='signup error' basic color='red'>
                  <Icon name='warning circle' />
                  {passwordError}
                </Label>
              )}
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password Confirmation'
                type='password'
                placeholder='Password Confirmation'
                autoComplete='new-password-confirmation'
                name='passwordConfirmation'
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
              {passwordConfirmationError && (
                <Label className='signup error' basic color='red'>
                  <Icon name='warning circle' />
                  {passwordConfirmationError}
                </Label>
              )}
              <Button fluid type='submit' color='teal'>
                Sign up
              </Button>
              <p className='signup text'>
                Already a user? <Link to='/login'>Log in</Link> here.
              </p>
            </Form>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default Signup;
