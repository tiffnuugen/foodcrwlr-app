import React, { Component } from 'react';
import { connect } from 'react-redux';

import RestaurantList from '../components/restaurants/RestaurantList';
import { showRestaurantDetails } from '../actions/yelpActions';

class RestaurantListContainer extends Component {
  render() {
    return (
      <div className='restaurant list container'>
        <RestaurantList
          restaurants={this.props.restaurants}
          showRestaurantDetails={this.props.showRestaurantDetails}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.yelp.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  showRestaurantDetails: (id) => dispatch(showRestaurantDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantListContainer);
