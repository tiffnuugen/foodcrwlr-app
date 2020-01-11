import React, { Component } from 'react';
import UserForm from '../components/users/UserForm';
import Users from '../components/users/Users';

class UsersContainer extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Users />
      </div>
    );
  }
}

export default UsersContainer;
