import React from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ username, handleLogout }) => {
  return (
    <Menu.Menu position='right'>
      <Dropdown item text={username}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/saved-restaurants'>
            My Restaurants
          </Dropdown.Item>
          <Dropdown.Item as={Link} to='/written-reviews'>
            My Reviews
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>
        <Button onClick={handleLogout}>Log out</Button>
      </Menu.Item>
    </Menu.Menu>
  );
};

export default DropdownMenu;
