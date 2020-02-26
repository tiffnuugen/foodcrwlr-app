import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react';

const Restaurants = ({ restaurants }) => {
  return (
    <Card.Group itemsPerRow={5}>
      {restaurants.map(
        ({ id, image_url, name, price, rating, display_phone }) => (
          <Card key={id} as={Link} to={`/restaurants/${id}`}>
            <Image src={image_url} height={300} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>
                Price: {price === undefined ? 'N/A' : price} | Rating: {rating}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Icon name='phone' />
              {display_phone === '' ? 'Not Available' : display_phone}
            </Card.Content>
          </Card>
        )
      )}
    </Card.Group>
  );
};

export default Restaurants;
