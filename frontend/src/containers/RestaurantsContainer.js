import React, { Component } from 'react';
import { connect } from 'react-redux';

import Restaurants from '../components/restaurants/Restaurants';
import { showRestaurantDetails } from '../actions/yelpActions';

class RestaurantsContainer extends Component {
  render() {
    return (
      <div className='restaurants container'>
        <Restaurants
          restaurants={this.props.restaurants}
          showRestaurantDetails={this.props.showRestaurantDetails}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.api.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  showRestaurantDetails: (id) => dispatch(showRestaurantDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
