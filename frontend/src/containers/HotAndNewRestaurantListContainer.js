import React, { Component } from 'react';
import { connect } from 'react-redux';

import HotAndNewRestaurantList from '../components/restaurants/HotAndNewRestaurantList';

import { fetchHotAndNewRestaurants } from '../actions/yelpActions';

class HotAndNewRestaurantListContainer extends Component {
  componentDidMount() {
    this.props.fetchHotAndNewRestaurants();
  }

  render() {
    return (
      <div className='hot and new restaurant list container'>
        <HotAndNewRestaurantList
          restaurants={this.props.restaurants}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.yelp.restaurants,
  loading: state.yelp.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchHotAndNewRestaurants: () => dispatch(fetchHotAndNewRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotAndNewRestaurantListContainer);
