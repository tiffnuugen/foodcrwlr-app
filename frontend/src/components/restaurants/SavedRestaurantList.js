import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Item, Rating, Icon, Message } from 'semantic-ui-react';

const SavedRestaurantList = ({ savedRestaurants, currentUserId }) => {
  const savedRestsArr = savedRestaurants.filter(
    (savedRest) => savedRest.user_id === currentUserId
  );
  return (
    <Item.Group divided>
      <h1>MY RESTAURANTS</h1>
      {savedRestsArr.length > 0 ? (
        savedRestsArr.map(
          ({
            details: {
              id,
              image_url,
              name,
              rating,
              price,
              categories,
              location,
              display_phone
            }
          }) => (
            <Item key={id}>
              <Item.Image src={image_url} />
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
                  <strong>
                    {display_phone ? display_phone : 'Not Available'}
                  </strong>
                </Item.Extra>
              </Item.Content>
            </Item>
          )
        )
      ) : (
        <Message>
          <Message.Header>No Saved Restaurants</Message.Header>
          <p>You have not saved any restaurants yet. Save a restaurant now!</p>
        </Message>
      )}
    </Item.Group>
  );
};

export default SavedRestaurantList;
