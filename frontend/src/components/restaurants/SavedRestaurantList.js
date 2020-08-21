import React from 'react';
import { Item, Message } from 'semantic-ui-react';

import SavedRestaurantItem from './SavedRestaurantItem';

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
            <SavedRestaurantItem
              key={id}
              id={id}
              imageUrl={image_url}
              name={name}
              rating={rating}
              price={price}
              categories={categories}
              location={location}
              displayPhone={display_phone}
            />
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
