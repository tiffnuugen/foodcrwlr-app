import React, { Component } from 'react';
import RestaurantForm from '../components/restaurants/RestaurantForm';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {
  render() {
    return (
      <>
        <RestaurantForm />
        <Restaurants />
      </>
    );
  }
}

export default RestaurantsContainer;
