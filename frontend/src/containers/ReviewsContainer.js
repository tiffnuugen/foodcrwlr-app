import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Header } from 'semantic-ui-react';

import ReviewForm from '../components/reviews/ReviewForm';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
  render() {
    return (
      <div className='reviews container'>
        <ReviewForm />
        <Divider section horizontal>
          <Header as='h2'>REVIEWS</Header>
        </Divider>
        <Reviews
          reviews={this.props.reviews}
          username={this.props.username}
          // restaurantId={this.props.restaurantId}
          // userId={this.props.userId}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
  username: state.auth.user.username
  // restaurantId: state.api.restaurantDetails.id,
  // userId: state.auth.user.id
});

export default connect(mapStateToProps)(ReviewsContainer);
