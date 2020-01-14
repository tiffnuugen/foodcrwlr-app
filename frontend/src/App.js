import React, { Component } from 'react';
import './App.css';
// import UsersContainer from './containers/UsersContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <RestaurantsContainer />
      </div>
    );
  }
}

export default App;
