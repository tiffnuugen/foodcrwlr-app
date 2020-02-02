import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in && this.props.loginStatus === 'NOT_LOGGED_IN') {
          this.props.loginUser(res.data.user);
        } else if (
          !res.data.logged_in &&
          this.props.loginStatus === 'LOGGED_IN'
        ) {
          this.props.logoutUser();
        }
      })
      .catch((error) => error);
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((res) => {
        this.props.logoutUser();
        this.setState({
          redirect: true
        });
      })
      .catch((error) => error);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/login' />;
    }
    console.log('home:', this);
    return (
      <menu className='ui secondary massive menu'>
        <h1>FoodCrwlr</h1>
        <div className='ui fluid category search'>
          <div className='ui icon input'>
            <input
              className='prompt'
              type='text'
              placeholder='Search restaurants...'
            />
            <i className='search icon'></i>
          </div>
          <div className='results'></div>
        </div>
        <div className='right menu'>
          <div className='ui dropdown item'>
            {this.props.username} <i className='dropdown icon'></i>
            <div className='menu'>
              <a className='item'>My Restaurants</a>
              <a className='item'>My Reviews</a>
              <a className='item'>My Friends</a>
            </div>
          </div>
          <div className='item'>
            <button onClick={() => this.handleLogout()} className='ui button'>
              Logout
            </button>
          </div>
        </div>
      </menu>
    );
  }
}

export default Home;
