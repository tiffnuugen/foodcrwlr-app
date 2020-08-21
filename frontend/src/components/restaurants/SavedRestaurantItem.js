import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Item, Rating, Icon } from 'semantic-ui-react';

const SavedRestaurantItem = ({
  id,
  imageUrl,
  name,
  rating,
  price,
  categories,
  location,
  displayPhone
}) => {
  return (
    <Item>
      <Item.Image src={imageUrl} />
      <Item.Content>
        <Item.Header as={Link} to={`/restaurants/${id}`}>
          {name}
        </Item.Header>
        <Item.Meta>
          {categories ? categories[0].title : 'Not Available'}
        </Item.Meta>
        <Item.Meta>
          {price &&
            price
              .split('')
              .map(() => (
                <Icon key={uuidv4()} fitted name='dollar sign' />
              ))}{' '}
          {price && '|'}{' '}
          <strong>{rating % 1 === 0 ? `${rating}.0` : rating}</strong>
          <Rating disabled defaultRating={rating} maxRating={5} />
        </Item.Meta>
        <Item.Description>
          <strong>
            {location
              ? location.display_address.map(
                  (item, index) => `${index ? ', ' : ''}${item}`
                )
              : 'Not Available'}
          </strong>
        </Item.Description>
        <Item.Extra>
          <strong>{displayPhone ? displayPhone : 'Not Available'}</strong>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default SavedRestaurantItem;
