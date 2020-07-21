import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Icon, Rating } from 'semantic-ui-react';

const RestaurantList = ({ restaurants, showRestaurantDetails }) => {
  return (
    <Card.Group itemsPerRow={5}>
      {restaurants.map(
        ({ id, image_url, name, price, rating, display_phone, categories }) => (
          <Card
            key={id}
            as={Link}
            to={`/restaurants/${id}`}
            onClick={() => showRestaurantDetails(id)}
          >
            <Image src={image_url} alt='Not Available' height={300} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>
                {rating % 1 === 0 ? `${rating}.0` : rating}{' '}
                <Rating
                  icon='star'
                  defaultRating={rating}
                  maxRating={5}
                  disabled
                />
              </Card.Meta>
              <Card.Meta>
                {price ? price : categories[0].title} {price && '|'}{' '}
                {price && categories[0].title}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Icon name='phone' />
              {!display_phone ? 'Not Available' : display_phone}
            </Card.Content>
          </Card>
        )
      )}
    </Card.Group>
  );
};

export default RestaurantList;