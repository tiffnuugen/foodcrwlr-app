import React, { Component } from 'react';

class UserForm extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <input type='button' />
      </form>
    );
  }
}

export default UserForm;
