import React, { Component } from 'react';
import { connect } from 'react-redux';

import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {
  render() {
    return (
      <div className='restaurants container'>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.apiReducer.restaurants
});

export default connect(mapStateToProps)(RestaurantsContainer);
