import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Divider, List } from 'semantic-ui-react';

import RestaurantDetails from '../components/restaurants/RestaurantDetails';
import ReviewListContainer from './ReviewListContainer';

import {
  saveRestaurant,
  unsaveRestaurant,
  fetchSavedRestaurants,
  showRestaurantDetails
} from '../actions/yelpActions';

class RestaurantDetailsContainer extends Component {
  fetchSavedRestaurants = () => {
    axios
      .get('http://localhost:3001/saved_restaurants')
      .then((res) => this.props.fetchSavedRestaurants(res.data));
  };

  componentDidMount() {
    const {
      showRestaurantDetails,
      match: {
        params: { id }
      }
    } = this.props;
    this.fetchSavedRestaurants();
    showRestaurantDetails(id);
  }

  handleSave = () => {
    const { restaurantDetails, saveRestaurant, currentUserId } = this.props;
    axios
      .post('http://localhost:3001/saved_restaurants', {
        saved_restaurant: {
          details: restaurantDetails,
          user_id: currentUserId
        }
      })
      .then((res) => saveRestaurant(res.data));
  };

  handleUnsave = (id) => {
    axios
      .delete(`http://localhost:3001/saved_restaurants/${id}`)
      .then((res) => this.props.unsaveRestaurant(res.data.id));
  };

  renderHours = (hours) => {
    const parsedHours = hours[0].open;
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let currentDay;

    return parsedHours.map(({ start, end, day }) => {
      const startHour = start.slice(0, 2);
      const startMin = start.slice(2);
      const endHour = end.slice(0, 2);
      const endMin = end.slice(2);
      let dayOfOperation = '';
      const hoursOfOperation = `${
        ((parseInt(startHour) + 11) % 12) + 1
      }:${startMin} ${startHour >= 12 ? 'pm' : 'am'} - ${
        ((parseInt(endHour) + 11) % 12) + 1
      }:${endMin} ${endHour >= 12 ? 'pm' : 'am'}`;

      if (currentDay !== day) {
        currentDay = day;
        dayOfOperation = days[day];
      }

      return (
        <List.Item key={uuidv4()}>
          <strong>{dayOfOperation}</strong> {hoursOfOperation}
        </List.Item>
      );
    });
  };

  render() {
    return (
      <div className='ui text restaurant details container'>
        <RestaurantDetails
          restaurantDetails={this.props.restaurantDetails}
          savedRestaurants={this.props.savedRestaurants}
          handleSave={this.handleSave}
          handleUnsave={this.handleUnsave}
          renderHours={this.renderHours}
          currentUserId={this.props.currentUserId}
          loading={this.props.loading}
        />
        <Divider section />
        <ReviewListContainer />
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
    dispatch(fetchSavedRestaurants(restaurants)),
  showRestaurantDetails: (id) => dispatch(showRestaurantDetails(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailsContainer)
);
