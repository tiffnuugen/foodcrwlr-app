import React from 'react';
import { Item, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const WrittenReviewItem = ({ text, rating, restaurantId, name }) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header as={Link} to={`/restaurants/${restaurantId}`}>
          {name}
        </Item.Header>
        <Item.Extra>
          <Rating disabled defaultRating={rating} maxRating={5} />
        </Item.Extra>
        <Item.Meta>"{text}"</Item.Meta>
      </Item.Content>
    </Item>
  );
};

export default WrittenReviewItem;
