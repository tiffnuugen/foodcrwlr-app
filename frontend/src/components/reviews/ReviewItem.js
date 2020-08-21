import React from 'react';
import { Comment, Rating } from 'semantic-ui-react';

const ReviewItem = ({
  id,
  edited,
  text,
  rating,
  username,
  createdAt,
  currentUser,
  renderDate,
  renderTime,
  toggleEdit,
  handleDelete
}) => {
  return (
    <Comment>
      <Rating disabled size='large' defaultRating={rating} maxRating={5} />
      <Comment.Content>
        <Comment.Author as='a'>{username}</Comment.Author>
        <Comment.Metadata>
          {renderDate(createdAt)} at {renderTime(createdAt)}
        </Comment.Metadata>
        {text ? (
          <Comment.Text>
            {text}
            <Comment.Metadata>{edited && '(edited)'}</Comment.Metadata>
          </Comment.Text>
        ) : (
          <Comment.Metadata>{edited && '(edited)'}</Comment.Metadata>
        )}
        <Comment.Actions>
          {currentUser === username && (
            <>
              <Comment.Action onClick={toggleEdit}>Edit</Comment.Action>
              <Comment.Action onClick={() => handleDelete(id)}>
                Delete
              </Comment.Action>
            </>
          )}
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default ReviewItem;
