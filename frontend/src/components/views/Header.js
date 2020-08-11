import React from 'react';
import { Menu, Dropdown, Button, Header as H1 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import RestaurantForm from '../restaurants/RestaurantForm';

const Header = ({
  username,
  handleLogout,
  handleSearchChange,
  handleSubmit,
  term,
  location,
  isFetched,
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
      />
      <Menu.Menu position='right'>
        <Dropdown item text={username}>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/saved-restaurants'>
              My Restaurants
            </Dropdown.Item>
            <Dropdown.Item as={Link} to='/written-reviews'>
              My Reviews
            </Dropdown.Item>
            <Dropdown.Item>My Friends</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>
          <Button onClick={handleLogout}>Log out</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
