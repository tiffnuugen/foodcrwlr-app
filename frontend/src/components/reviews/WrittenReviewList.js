import React from 'react';
import { Item, Rating, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
            <Item key={id}>
              <Item.Content>
                <Item.Header as={Link} to={`/restaurants/${restaurant_id}`}>
                  {name}
                </Item.Header>
                <Item.Extra>
                  <Rating disabled defaultRating={rating} maxRating={5} />
                </Item.Extra>
                <Item.Meta>"{text}"</Item.Meta>
              </Item.Content>
            </Item>
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
