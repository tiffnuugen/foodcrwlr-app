import React from 'react';

const Review = () => {
  return (
    <Comment>
      {/* <Comment.Avatar src='' /> */}
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Edit</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default Review;
