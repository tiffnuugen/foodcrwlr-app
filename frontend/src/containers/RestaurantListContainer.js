import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RestaurantList from '../components/restaurants/RestaurantList';

import { fetchRestaurants } from '../actions/yelpActions';

class RestaurantListContainer extends Component {
  componentDidMount() {
    const {
      fetchRestaurants,
      location: { state }
    } = this.props;
    fetchRestaurants(state);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchRestaurants,
      location: { search, state }
    } = this.props;
    if (prevProps.location.search !== search) {
      fetchRestaurants(state);
    }
  }

  render() {
    return (
      <div className='restaurant list container'>
        <RestaurantList
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
  fetchRestaurants: (searchValues) => dispatch(fetchRestaurants(searchValues))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantListContainer)
);
