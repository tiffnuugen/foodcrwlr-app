import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react';

const Restaurants = ({ restaurants }) => {
  return (
    <Card.Group itemsPerRow={5}>
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          as={Link}
          to={`/restaurants/${restaurant.id}`}
        >
          <Image src={restaurant.image_url} />
          <Card.Content>
            <Card.Header>{restaurant.name}</Card.Header>
            <Card.Meta>
              Price: {restaurant.price === undefined ? 'N/A' : restaurant.price}{' '}
              | Rating: {restaurant.rating}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Icon name='phone' />
            {restaurant.display_phone === ''
              ? 'Not Available'
              : restaurant.display_phone}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default Restaurants;
