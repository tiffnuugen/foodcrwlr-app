import React, { Component } from 'react';

class RestaurantForm extends Component {
  render() {
    return (
      <form className='ui fluid category search'>
        <div className='ui icon input'>
          <input
            className='prompt'
            type='text'
            placeholder='Search restaurants...'
          />
          <i className='search icon'></i>
        </div>
        <div className='results'></div>
      </form>
    );
  }
}

export default RestaurantForm;
