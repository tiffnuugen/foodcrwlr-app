import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Comment, Message } from 'semantic-ui-react';

import Review from './Review';

class Reviews extends Component {
  render() {
    // const reviews = this.props.reviews.filter(
    //   (review) => review.restaurantId === this.props.restaurantId
    // );
    // console.log(reviews);
    return (
      <Comment.Group>
        {this.props.reviews.map((review) => (
          <Review
            key={uuidv4()}
            text={review.text}
            rating={review.rating}
            username={this.props.username}
          />
        ))}
        {/* <Message>
          <Message.Header>No Reviews</Message.Header>
          <p>
            It looks like there are no reviews here yet. Be the first to leave
            one here.
          </p>
        </Message> */}
      </Comment.Group>
    );
  }
}

export default Reviews;
