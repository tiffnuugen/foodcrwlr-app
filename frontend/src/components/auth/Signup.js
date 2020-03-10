import React, { Component } from 'react';
import '../../assets/stylesheets/Signup.css';

import { Button, Form, Card, Container } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    signupErrors: '',
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
      .catch((error) => console.log(error.response));
    this.setState({
      username: '',
      password: '',
      passwordConfirmation: ''
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    return (
      <Container className='signup' textAlign='center'>
        <Card centered={true}>
          <Card.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                placeholder='Password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password Confirmation'
                type='password'
                placeholder='Password Confirmation'
                name='passwordConfirmation'
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
              />
              <Button type='submit' color='teal'>
                Sign up
              </Button>
              <p>
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
