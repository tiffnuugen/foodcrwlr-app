import React from 'react';
import { Search, Button } from 'semantic-ui-react';

const RestaurantForm = ({
  handleSearchChange,
  handleSubmit,
  term,
  location,
  isFetched,
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
      <Search
        fluid
        icon={null}
        name='location'
        placeholder='near this location...'
        showNoResults={false}
        value={location}
        onSearchChange={handleSearchChange}
      />
      {loading && isFetched ? (
        <Button circular size='large' loading icon='user' />
      ) : (
        <Button circular size='large' icon='search' />
      )}
    </form>
  );
};

export default RestaurantForm;
