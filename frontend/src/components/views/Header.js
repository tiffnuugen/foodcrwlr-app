import React from 'react';
import { Menu, Dropdown, Button, Header as H1 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import RestaurantForm from '../restaurants/RestaurantForm';

const Header = ({ username, handleLogout, clearRestaurants }) => {
  return (
    <Menu secondary size='massive'>
      <H1 size='huge' as={Link} to='/' onClick={() => clearRestaurants()}>
        FoodCrwlr
      </H1>
      <RestaurantForm />
      <Menu.Menu position='right'>
        <Dropdown item text={username}>
          <Dropdown.Menu>
            <Dropdown.Item>My Restaurants</Dropdown.Item>
            <Dropdown.Item>My Reviews</Dropdown.Item>
            <Dropdown.Item>My Friends</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button onClick={() => handleLogout()}>Log out</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
