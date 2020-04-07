import React from 'react';
import { Comment, Rating } from 'semantic-ui-react';

const renderDate = (createdAt) => {
  const date = new Date(createdAt).toLocaleDateString();
  return date;
};

const renderTime = (createdAt) => {
  const time = new Date(createdAt).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  return time;
};

const Review = ({ text, rating, username, createdAt }) => {
  return (
    <Comment>
      {/* <Comment.Avatar src='' /> */}
      <Rating disabled size='large' defaultRating={rating} maxRating={5} />
      <Comment.Content>
        <Comment.Author as='a'>{username}</Comment.Author>
        <Comment.Metadata>
          {renderDate(createdAt)} at {renderTime(createdAt)}
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
