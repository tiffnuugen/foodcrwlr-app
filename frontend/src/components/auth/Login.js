import React, { Component } from 'react';
import '../../assets/stylesheets/App.css';

import { Button, Form, Card, Container, Label, Icon } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
    redirect: false
  };

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
            username: '',
            password: '',
            redirect: !this.state.redirect
          });
        } else {
          this.handleValidations();
        }
      });
  };

  handleValidations = () => {
    const { username, password } = this.state;
    axios.get('http://localhost:3001/sessions').then((res) => {
      const user =
        res.data.users.find((user) => user.username === username) || '';
      this.setState({
        usernameError:
          (!username && "Can't be blank.") ||
          (user.username !== username && 'Username was not found.'),
        passwordError:
          (!password && "Can't be blank.") ||
          (user.password_digest !== password && 'Password was incorrect.')
      });
    });
  };

  render() {
    const {
      username,
      password,
      redirect,
      usernameError,
      passwordError
    } = this.state;
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
      <Container className='login background'>
        <Card centered={true}>
          <Card.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                autoComplete='current-username'
                name='username'
                value={username}
                onChange={this.handleChange}
              />
              {usernameError && (
                <Label className='login error' basic color='red'>
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
                autoComplete='current-password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              {passwordError && (
                <Label className='login error' basic color='red'>
                  <Icon name='warning circle' />
                  {passwordError}
                </Label>
              )}
              <Button fluid type='submit' color='teal'>
                Log in
              </Button>
              <p className='login text'>
                New to App? <Link to='/signup'>Sign up</Link> here.
              </p>
            </Form>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default Login;
