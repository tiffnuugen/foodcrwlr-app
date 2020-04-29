import React from 'react';
import { Comment, Rating } from 'semantic-ui-react';
import axios from 'axios';

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

const Review = ({ text, rating, username, createdAt, currentUser }) => {
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
          {currentUser === username ? (
            <>
              <Comment.Action>Edit</Comment.Action>
              <Comment.Action>Delete</Comment.Action>
            </>
          ) : null}
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default Review;
