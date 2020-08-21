import React from 'react';
import { Comment, Rating, Form } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

const EditReviewForm = ({
  id,
  text,
  rating,
  username,
  createdAt,
  currentUser,
  handleRate,
  handleChange,
  renderDate,
  renderTime,
  handleEdit,
  handleDelete
}) => {
  return (
    <Form>
      <Comment>
        <Rating
          clearable
          size='huge'
          rating={rating}
          maxRating={5}
          onRate={handleRate}
        />
        <Comment.Content>
          <Comment.Author as='a'>{username}</Comment.Author>
          <Comment.Metadata>
            {renderDate(createdAt)} at {renderTime(createdAt)}
          </Comment.Metadata>
          <Comment.Text>
            <TextareaAutosize
              name='text'
              value={text}
              rows={1}
              onChange={handleChange}
            />
          </Comment.Text>
          <Comment.Actions>
            {currentUser === username && (
              <>
                <Comment.Action onClick={handleEdit}>Done</Comment.Action>
                <Comment.Action onClick={() => handleDelete(id)}>
                  Delete
                </Comment.Action>
              </>
            )}
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Form>
  );
};

export default EditReviewForm;
