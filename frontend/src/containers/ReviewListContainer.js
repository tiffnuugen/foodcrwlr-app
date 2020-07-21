import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import ReviewForm from '../components/reviews/ReviewForm';
import ReviewList from '../components/reviews/ReviewList';

import { deleteReview } from '../actions/apiActions';
import { editReview } from '../actions/apiActions';
import { fetchReviews } from '../actions/apiActions';

class ReviewListContainer extends Component {
  fetchReviews = () => {
    axios
      .get('http://localhost:3001/reviews')
      .then((res) => this.props.fetchReviews(res.data));
  };

  componentDidMount() {
    this.fetchReviews();
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleRate = (e, { rating }) => {
    this.setState({
      rating
    });
  };

  handleSubmit = async () => {
    const { text, rating } = this.state;
    const {
      currentUserId,
      restaurantId,
      restaurantName,
      yelpId,
      addReview
    } = this.props;

    await axios.post('http://localhost:3001/restaurants', {
      restaurant: {
        name: restaurantName,
        yelp_id: yelpId
      }
    });
    const review = await axios.post('http://localhost:3001/reviews', {
      review: {
        text: text,
        rating: rating,
        user_id: currentUserId,
        restaurant_id: restaurantId
      }
    });
    addReview(review.data);
    this.setState({
      text: '',
      rating: 0
    });
  };

  render() {
    return (
      <div className='review list container'>
        <ReviewForm />
        <ReviewList
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
  editReview: (review) => dispatch(editReview(review)),
  fetchReviews: (reviews) => dispatch(fetchReviews(reviews))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewListContainer);
