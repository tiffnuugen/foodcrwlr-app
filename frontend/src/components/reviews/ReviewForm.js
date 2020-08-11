import React from 'react';
import { Form, TextArea, Button, Icon, Rating, Label } from 'semantic-ui-react';

const ReviewForm = ({
  text,
  rating,
  handleSubmit,
  handleChange,
  handleRate,
  ratingError
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
      {ratingError && (
        <Label
          className='rating error'
          size='mini'
          basic
          color='red'
          pointing='left'
        >
          {ratingError}
        </Label>
      )}
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
