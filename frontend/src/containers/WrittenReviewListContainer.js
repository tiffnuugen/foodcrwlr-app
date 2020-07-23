import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import WrittenReviewList from '../components/reviews/WrittenReviewList';

import { fetchReviews } from '../actions/apiActions';
import { showRestaurantDetails } from '../actions/yelpActions';

class WrittenReviewListContainer extends Component {
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
      <div className='ui text written review list container'>
        <WrittenReviewList
          reviews={this.props.reviews}
          showRestaurantDetails={this.props.showRestaurantDetails}
          currentUserId={this.props.currentUserId}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.api.reviews,
  currentUserId: state.auth.user.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (reviews) => dispatch(fetchReviews(reviews)),
  showRestaurantDetails: (id) => dispatch(showRestaurantDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrittenReviewListContainer);
