import React from 'react';
import { Comment, Rating } from 'semantic-ui-react';

const Review = ({ text, rating, username }) => {
  return (
    <Comment>
      {/* <Comment.Avatar src='' /> */}
      <Rating disabled size='large' defaultRating={rating} maxRating={5} />
      <Comment.Content>
        <Comment.Author as='a'>{username}</Comment.Author>
        <Comment.Metadata>
          <div>
            {new Date().toLocaleDateString()} at{' '}
            {new Date().toLocaleTimeString('en-US', {
              hour: 'numeric',
              hour12: true,
              minute: 'numeric'
            })}
          </div>
        </Comment.Metadata>
        <Comment.Text>{text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Edit</Comment.Action>
          <Comment.Action>Delete</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default Review;
