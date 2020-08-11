import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SavedRestaurantList from '../components/restaurants/SavedRestaurantList';

import { fetchSavedRestaurants } from '../actions/yelpActions';

class SavedRestaurantListContainer extends Component {
  fetchSavedRestaurants = () => {
    axios
      .get('http://localhost:3001/saved_restaurants')
      .then((res) => this.props.fetchSavedRestaurants(res.data));
  };

  componentDidMount() {
    this.fetchSavedRestaurants();
  }

  render() {
    return (
      <div className='ui text saved restaurant list container'>
        <SavedRestaurantList
          savedRestaurants={this.props.savedRestaurants}
          currentUserId={this.props.currentUserId}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedRestaurants: state.yelp.savedRestaurants,
  currentUserId: state.auth.user.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchSavedRestaurants: (restaurants) =>
    dispatch(fetchSavedRestaurants(restaurants))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedRestaurantListContainer);
