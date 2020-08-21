import React from 'react';
import { Icon, Card, Image, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({
  id,
  imageUrl,
  name,
  price,
  rating,
  displayPhone,
  categories
}) => {
  return (
    <Card as={Link} to={`/restaurants/${id}`}>
      <Image src={imageUrl} alt='Not Available' height={300} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {rating % 1 === 0 ? `${rating}.0` : rating}{' '}
          <Rating icon='star' defaultRating={rating} maxRating={5} disabled />
        </Card.Meta>
        <Card.Meta>
          {price ? price : categories[0].title} {price && '|'}{' '}
          {price && categories[0].title}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name='phone' />
        {displayPhone ? displayPhone : 'Not Available'}
      </Card.Content>
    </Card>
  );
};

export default RestaurantCard;
