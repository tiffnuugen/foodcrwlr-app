import React from 'react';
import { Item, Message } from 'semantic-ui-react';

import WrittenReviewItem from './WrittenReviewItem';

const WrittenReviewList = ({ reviews, currentUserId }) => {
  const writtenReviewsArr = reviews.filter(
    (review) => review.user_id === currentUserId
  );
  return (
    <Item.Group divided>
      <h1>MY REVIEWS</h1>
      {writtenReviewsArr.length > 0 ? (
        writtenReviewsArr.map(
          ({ id, text, rating, restaurant_id, restaurant: { name } }) => (
            <WrittenReviewItem
              key={id}
              text={text}
              rating={rating}
              restaurantId={restaurant_id}
              name={name}
            />
          )
        )
      ) : (
        <Message>
          <Message.Header>No Written Reviews</Message.Header>
          <p>You have not written any reviews yet. Write a review now!</p>
        </Message>
      )}
    </Item.Group>
  );
};

export default WrittenReviewList;
