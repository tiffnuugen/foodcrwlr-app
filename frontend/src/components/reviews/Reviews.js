import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Divider, Header, Comment, Message } from 'semantic-ui-react';

import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews
      .filter((review) => review.restaurant_id === this.props.restaurantId)
      .sort((a, b) =>
        Date.parse(a.created_at) < Date.parse(b.created_at) ? 1 : -1
      );
    return (
      <>
        <Divider section horizontal>
          <Header as='h2'>REVIEWS ({reviews.length})</Header>
        </Divider>
      <Comment.Group>
            {reviews.map(
              ({ id, text, rating, created_at, user: { username } }) => (
          <Review
                  key={id}
                  text={text}
                  rating={rating}
                  createdAt={created_at}
                  username={username}
          />
              )
            )}
          </Comment.Group>
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
