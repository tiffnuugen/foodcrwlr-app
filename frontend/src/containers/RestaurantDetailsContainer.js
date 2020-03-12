import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import RestaurantDetails from '../components/restaurants/RestaurantDetails';
import ReviewsContainer from './ReviewsContainer';

class RestaurantDetailsContainer extends Component {
  render() {
    return (
      <div className='ui text restaurant details container'>
        <RestaurantDetails
          restaurantDetails={this.props.restaurantDetails}
          loading={this.props.loading}
        />
        <Divider section />
        <ReviewsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantDetails: state.api.restaurantDetails,
  loading: state.api.loading
});

export default connect(mapStateToProps)(RestaurantDetailsContainer);
