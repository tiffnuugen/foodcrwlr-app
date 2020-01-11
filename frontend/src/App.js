import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import UsersContainer from './containers/UsersContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <RestaurantsContainer />
      </div>
    );
  }
}

export default App;
