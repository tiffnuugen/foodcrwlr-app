import React from 'react';
import { Form, TextArea, Button, Icon, Rating } from 'semantic-ui-react';

const ReviewForm = ({
  text,
  rating,
  handleSubmit,
  handleChange,
  handleRate
}) => {
  return (
    <Form className='review' onSubmit={handleSubmit}>
      <strong>Select a rating:</strong>{' '}
      <Rating
        clearable
        size='huge'
        rating={rating}
        maxRating={5}
        onRate={handleRate}
      />
      <TextArea
        name='text'
        placeholder='Write a review...'
        value={text}
        onChange={handleChange}
      />
      <Button type='submit' floated='right' basic color='teal'>
        <Icon name='add' />
        Add Review
      </Button>
    </Form>
  );
};

export default ReviewForm;
