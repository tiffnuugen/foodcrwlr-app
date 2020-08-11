import React from 'react';
import { Search, Button, Label, Icon } from 'semantic-ui-react';

const RestaurantForm = ({
  handleSearchChange,
  handleSubmit,
  term,
  location,
  loading,
  isFetched,
  locationError
}) => {
  return (
    <form className='search form container' onSubmit={handleSubmit}>
      <Search
        fluid
        icon={null}
        name='term'
        placeholder='Search restaurants...'
        showNoResults={false}
        value={term}
        onSearchChange={handleSearchChange}
      />
      <div className='location input'>
        <Search
          fluid
          icon={null}
          name='location'
          placeholder='near this location...'
          showNoResults={false}
          value={location}
          onSearchChange={handleSearchChange}
        />
        {locationError && (
          <Label className='location error' basic color='red'>
            <Icon name='warning circle' />
            {locationError}
          </Label>
        )}
      </div>
      {loading && isFetched ? (
        <Button circular size='large' loading icon='user' />
      ) : (
        <Button circular size='large' icon='search' />
      )}
    </form>
  );
};

export default RestaurantForm;
