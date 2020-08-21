import React from 'react';
import { Card, Message } from 'semantic-ui-react';

import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, loading }) => {
  return (
    <>
      {!loading && <h2>All Results</h2>}
      {!restaurants || !restaurants.length ? (
        <Message size='large' compact>
          <Message.Header> No Results Found</Message.Header>
          <p>Please try again.</p>
        </Message>
      ) : (
        <Card.Group itemsPerRow={5}>
          {restaurants.map(
            ({
              id,
              image_url,
              name,
              price,
              rating,
              display_phone,
              categories
            }) => (
              <RestaurantCard
                key={id}
                id={id}
                imageUrl={image_url}
                name={name}
                price={price}
                rating={rating}
                displayPhone={display_phone}
                categories={categories}
              />
            )
          )}
        </Card.Group>
      )}
    </>
  );
};

export default RestaurantList;
