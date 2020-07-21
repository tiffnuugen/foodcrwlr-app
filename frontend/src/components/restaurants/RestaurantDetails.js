import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Item,
  Header,
  Rating,
  Image,
  Loader,
  Dimmer,
  Icon,
  Segment,
  Label,
  Button
} from 'semantic-ui-react';

const RestaurantDetails = ({
  handleSave,
  handleUnsave,
  renderHours,
  savedRestaurants,
      loading,
  currentUserId,
      restaurantDetails: {
        id,
        name,
        image_url,
        is_closed,
        url,
        display_phone,
        categories,
        rating,
        location,
        photos,
        price,
        hours
      }
}) => {
  const savedRestaurant =
    savedRestaurants.find(
      (savedRest) =>
        savedRest.yelp_id === id && savedRest.user_id === currentUserId
    ) || !!undefined;
    return (
      <>
        {loading ? (
          <Dimmer active inverted>
            <Loader size='large'>Loading...</Loader>
          </Dimmer>
        ) : (
          <Segment>
            <Item.Group>
              <Item>
                <Image
                  src={image_url}
                  alt='Not Available'
                  height={300}
                  width={300}
                />
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
                  {savedRestaurant ? (
                      <div className='save restaurant'>
                        <Button
                          active
                          circular
                          basic
                          icon='bookmark outline'
                        onClick={() => handleUnsave(savedRestaurant.id)}
                        />
                        <Label size='mini'>Saved</Label>
                      </div>
                    ) : (
                      <div className='save restaurant'>
                        <Button
                          circular
                          basic
                          icon='bookmark outline'
                        onClick={handleSave}
                        />
                        <Label size='mini'>Save</Label>
                      </div>
                    )}
                    <Item.Meta>
                      {!categories ? 'Not Available' : categories[0].title}
                    </Item.Meta>
                    <Item.Meta>
                      {price &&
                        price
                          .split('')
                          .map(() => (
                            <Icon key={uuidv4()} fitted name='dollar sign' />
                          ))}{' '}
                      {price && '|'}{' '}
                      <strong>
                        {rating % 1 === 0 ? `${rating}.0` : rating}
                      </strong>
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
                            {!location
                              ? 'Not Available'
                              : location.display_address.map(
                                  (item, index) => `${index ? ', ' : ''}${item}`
                                )}
                          </strong>
                        </Item.Description>
                      </Segment>
                      <Segment
                        size='large'
                        textAlign='center'
                        className='hours'
                      >
                        <Icon name='clock outline' />
                        <Item.Description>
                          {!hours ? (
                            <strong>Not Available</strong>
                          ) : (
                            this.renderHours(hours)
                          )}
                        </Item.Description>
                      </Segment>
                      <Segment
                        size='large'
                        textAlign='center'
                        className='phone'
                      >
                        <Icon name='phone' />
                        <strong>
                          {!display_phone ? 'Not Available' : display_phone}
                        </strong>
                      </Segment>
                    </Segment.Group>
                    <Item.Extra>
                      {!categories ? (
                        <Label>Not Available</Label>
                      ) : (
                        categories.map(({ alias }) => (
                          <Label key={alias} size='large'>
                            {alias}
                          </Label>
                        ))
                      )}
                    </Item.Extra>
                  </Segment>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        )}
      </>
    );
  }
}

export default RestaurantDetails;

// messy inline conditional rendering
// hours[0].open.map(({ start, end, day }) => (
//   <List.Item key={day}>
//     <strong>{days[day]}</strong>

// divide hours by 12 method
//     {((parseInt(start.slice(0, 2)) + 11) % 12) + 1}:{start.slice(2)}{' '}
//     {start.slice(0, 2) >= 12 ? 'pm' : 'am'}-{' '}
//     {((parseInt(end.slice(0, 2)) + 11) % 12) + 1}:{end.slice(2)}{' '}
//     {end.slice(0, 2) >= 12 ? 'pm' : 'am'}

// OR

//  subtract 12 from hours method
//     {start.slice(0, 2) > 12
//       ? Math.abs(start.slice(0, 2) - 12)
//       : start.slice(0, 2)}
//     :{start.slice(2)} {start.slice(0, 2) >= 12 ? 'pm' : 'am'} -{' '}
//     {end.slice(0, 2) > 12 || end.slice(0, 2) === '00'
//       ? Math.abs(end.slice(0, 2) - 12)
//       : end.slice(1, 2)}
//     :{end.slice(2)} {end.slice(0, 2) >= 12 ? 'pm' : 'am'}
//   </List.Item>
// ));
