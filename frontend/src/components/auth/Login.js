import React, { Component } from 'react';
import '../../assets/stylesheets/Login.css';

import { Button, Form, Card, Container } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
    loginErrors: '',
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
            redirect: true
          });
        }
      })
      .catch((error) => console.log(error.response));
    this.setState({
      username: '',
      password: ''
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    return (
      <Container className='login' textAlign='center'>
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
              <Button type='submit' color='teal'>
                Log in
              </Button>
              <p>
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
