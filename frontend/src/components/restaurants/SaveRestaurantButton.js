import React from 'react';
import { Button, Label } from 'semantic-ui-react';

const SaveRestaurantButton = ({
  savedRestaurant,
  handleSave,
  handleUnsave
}) => {
  return savedRestaurant ? (
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
      <Button circular basic icon='bookmark outline' onClick={handleSave} />
      <Label size='mini'>Save</Label>
    </div>
  );
};

export default SaveRestaurantButton;
