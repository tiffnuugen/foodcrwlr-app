import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewForm from '../components/reviews/ReviewForm';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
  render() {
    return (
      <div className='reviews container'>
        <ReviewForm />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurantId}
          currentUser={this.props.username}
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

export default connect(mapStateToProps)(ReviewsContainer);
