import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewForm from '../components/reviews/ReviewForm';
import Reviews from '../components/reviews/Reviews';

import { deleteReview } from '../actions/apiActions';
import { editReview } from '../actions/apiActions';
import { fetchReviews } from '../actions/apiActions';

class ReviewsContainer extends Component {
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
      <div className='reviews container'>
        <ReviewForm />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurantId}
          currentUser={this.props.currentUser}
          deleteReview={this.props.deleteReview}
          editReview={this.props.editReview}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.api.reviews,
  restaurantId: state.yelp.restaurantDetails.id,
  currentUser: state.auth.user.username
});

const mapDispatchToProps = (dispatch) => ({
  deleteReview: (id) => dispatch(deleteReview(id)),
  editReview: (review) => dispatch(editReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
