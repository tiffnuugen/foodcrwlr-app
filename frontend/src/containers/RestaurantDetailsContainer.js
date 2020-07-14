import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import axios from 'axios';

import RestaurantDetails from '../components/restaurants/RestaurantDetails';
import ReviewsContainer from './ReviewsContainer';

import {
  saveRestaurant,
  unsaveRestaurant,
  fetchSavedRestaurants
} from '../actions/yelpActions';

class RestaurantDetailsContainer extends Component {
  fetchReviews = () => {
    axios
      .get('http://localhost:3001/reviews')
      .then((res) => this.props.fetchReviews(res.data));
  };

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    const savedRestaurants = this.props.savedRestaurants.filter(
      (rest) =>
        rest.yelp_id === this.props.restaurantDetails.id &&
        rest.user_id === this.props.currentUserId
    );
    return (
      <div className='ui text restaurant details container'>
        {savedRestaurants.length === 0 ? (
          <RestaurantDetails
            restaurantDetails={this.props.restaurantDetails}
            saveRestaurant={this.props.saveRestaurant}
            unsaveRestaurant={this.props.unsaveRestaurant}
            currentUserId={this.props.currentUserId}
            loading={this.props.loading}
          />
        ) : (
          savedRestaurants.map((savedRest) => (
        <RestaurantDetails
              key={savedRest.id}
              savedRest={savedRest}
          restaurantDetails={this.props.restaurantDetails}
              saveRestaurant={this.props.saveRestaurant}
              unsaveRestaurant={this.props.unsaveRestaurant}
              currentUserId={this.props.currentUserId}
          loading={this.props.loading}
        />
          ))
        )}
        <Divider section />
        <ReviewsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantDetails: state.yelp.restaurantDetails,
  savedRestaurants: state.yelp.savedRestaurants,
  currentUserId: state.auth.user.id,
  loading: state.yelp.loading
});

const mapDispatchToProps = (dispatch) => ({
  saveRestaurant: (restaurant) => dispatch(saveRestaurant(restaurant)),
  unsaveRestaurant: (id) => dispatch(unsaveRestaurant(id)),
  fetchSavedRestaurants: (restaurants) =>
    dispatch(fetchSavedRestaurants(restaurants))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetailsContainer);
