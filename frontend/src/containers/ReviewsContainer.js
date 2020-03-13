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
          restaurantId={this.props.restaurantId}
          username={this.props.username}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
  restaurantId: state.api.restaurantDetails.id,
  username: state.auth.user.username,
  userId: state.auth.user.id
});

export default connect(mapStateToProps)(ReviewsContainer);
