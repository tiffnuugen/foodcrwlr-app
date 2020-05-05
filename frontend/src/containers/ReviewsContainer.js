import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewForm from '../components/reviews/ReviewForm';
import Reviews from '../components/reviews/Reviews';

import { deleteReview } from '../actions/apiActions';
class ReviewsContainer extends Component {
  render() {
    return (
      <div className='reviews container'>
        <ReviewForm />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurantId}
          currentUser={this.props.username}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.api.reviews,
  restaurantId: state.yelp.restaurantDetails.id,
  username: state.auth.user.username
});

const mapDispatchToProps = (dispatch) => ({
  deleteReview: (id) => dispatch(deleteReview(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
