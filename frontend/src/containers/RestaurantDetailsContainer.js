import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import axios from 'axios';

import RestaurantDetails from '../components/restaurants/RestaurantDetails';
import ReviewsContainer from './ReviewsContainer';

import { fetchReviews } from '../actions/apiActions';

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
  restaurantDetails: state.yelp.restaurantDetails,
  loading: state.yelp.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (reviews) => dispatch(fetchReviews(reviews))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetailsContainer);
