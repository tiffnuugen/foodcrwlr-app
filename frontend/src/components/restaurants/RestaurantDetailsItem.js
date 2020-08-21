import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Item,
  Header,
  Rating,
  Image,
  Icon,
  Segment,
  Label
} from 'semantic-ui-react';

import SaveRestaurantButton from './SaveRestaurantButton';

const RestaurantDetailsItem = ({
  id,
  name,
  imageUrl,
  url,
  displayPhone,
  categories,
  rating,
  location,
  price,
  hours,
  handleSave,
  handleUnsave,
  renderHours,
  savedRestaurants,
  currentUserId
}) => {
  const savedRestaurant =
    savedRestaurants.find(
      (savedRest) =>
        savedRest.details.id === id && savedRest.user_id === currentUserId
    ) || !!undefined;
  return (
    <Segment>
      <Item.Group>
        <Item>
          <Image src={imageUrl} alt='Not Available' height={300} width={300} />
          <Item.Content>
            <Segment>
              <Header
                size='huge'
                color='teal'
                as='a'
                href={url}
                target='_blank'
              >
                {name}
              </Header>
              <SaveRestaurantButton
                savedRestaurant={savedRestaurant}
                handleSave={handleSave}
                handleUnsave={handleUnsave}
              />
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
                <Rating
                  disabled
                  size='large'
                  defaultRating={rating}
                  maxRating={5}
                />
              </Item.Meta>
              <Segment.Group>
                <Segment textAlign='center' className='location'>
                  <Item.Description>
                    <Icon name='map marker alternate' />
                    <strong>
                      {location
                        ? location.display_address.map(
                            (item, index) => `${index ? ', ' : ''}${item}`
                          )
                        : 'Not Available'}
                    </strong>
                  </Item.Description>
                </Segment>
                <Segment size='large' textAlign='center' className='hours'>
                  <Icon name='clock outline' />
                  <Item.Description>
                    {hours ? (
                      renderHours(hours)
                    ) : (
                      <strong>Not Available</strong>
                    )}
                  </Item.Description>
                </Segment>
                <Segment size='large' textAlign='center' className='phone'>
                  <Icon name='phone' />
                  <strong>
                    {displayPhone ? displayPhone : 'Not Available'}
                  </strong>
                </Segment>
              </Segment.Group>
              <Item.Extra>
                {categories ? (
                  categories.map(({ alias }) => (
                    <Label key={alias} size='large'>
                      {alias}
                    </Label>
                  ))
                ) : (
                  <Label>Not Available</Label>
                )}
              </Item.Extra>
            </Segment>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default RestaurantDetailsItem;
