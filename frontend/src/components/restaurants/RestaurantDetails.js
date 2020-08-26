import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

import RestaurantDetailsItem from './RestaurantDetailsItem';

const RestaurantDetails = ({
  handleSave,
  handleUnsave,
  renderHours,
  savedRestaurants,
  loading,
  currentUserId,
  count,
  addOne,
  minusOne,
  restaurantDetails: {
    id,
    name,
    image_url,
    url,
    display_phone,
    categories,
    rating,
    location,
    price,
    hours
  }
}) => {
  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader size='large'>Loading...</Loader>
        </Dimmer>
      ) : (
        <RestaurantDetailsItem
          id={id}
          name={name}
          imageUrl={image_url}
          url={url}
          displayPhone={display_phone}
          categories={categories}
          rating={rating}
          location={location}
          price={price}
          hours={hours}
          handleSave={handleSave}
          handleUnsave={handleUnsave}
          renderHours={renderHours}
          savedRestaurants={savedRestaurants}
          currentUserId={currentUserId}
          count={count}
          addOne={addOne}
          minusOne={minusOne}
        />
      )}
    </>
  );
};

export default RestaurantDetails;
