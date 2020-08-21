import React from 'react';
import { Icon, Card, Loader, Message } from 'semantic-ui-react';

import RestaurantCard from './RestaurantCard';

const HotAndNewRestaurantList = ({ restaurants, loading }) => {
  return (
    <>
      <h2>
        {loading ? (
          <Loader active inline />
        ) : (
          <>
            <Icon name='fire' />
            Hot and New Restaurants in NYC
          </>
        )}
      </h2>
      {!restaurants ? (
        <Message size='large' compact>
          <Message.Header>Something Went Wrong</Message.Header>
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

export default HotAndNewRestaurantList;
