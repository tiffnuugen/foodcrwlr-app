import React from 'react';
import { Menu, Header as H1 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import RestaurantForm from './components/restaurants/RestaurantForm';
import DropdownMenu from './DropdownMenu';

const Header = ({
  username,
  handleLogout,
  handleSearchChange,
  handleSubmit,
  term,
  location,
  loading,
  isFetched,
  locationError
}) => {
  return (
    <Menu secondary size='massive'>
      <H1 size='huge' color='teal' as={Link} to='/'>
        FoodCrwlr
      </H1>
      <RestaurantForm
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
        term={term}
        location={location}
        loading={loading}
        isFetched={isFetched}
        locationError={locationError}
      />
      <DropdownMenu username={username} handleLogout={handleLogout} />
    </Menu>
  );
};

export default Header;
