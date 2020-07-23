import React from 'react';
import { Item, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const WrittenReviewList = ({
  reviews,
  showRestaurantDetails,
  currentUserId
}) => {
  const writtenReviewsArr = reviews.filter(
    (review) => review.user_id === currentUserId
  );
  return (
    <Item.Group divided>
      <h1>MY REVIEWS</h1>
      {writtenReviewsArr.map(
        ({ id, text, rating, restaurant_id, restaurant: { name } }) => (
          <Item key={id}>
            <Item.Content>
              <Item.Header
                as={Link}
                to={`/restaurants/${restaurant_id}`}
                onClick={() => showRestaurantDetails(restaurant_id)}
              >
                {name}
              </Item.Header>
              <Item.Extra>
                <Rating disabled defaultRating={rating} maxRating={5} />
              </Item.Extra>
              <Item.Meta>"{text}"</Item.Meta>
            </Item.Content>
          </Item>
        )
      )}
    </Item.Group>
  );
};

export default WrittenReviewList;
