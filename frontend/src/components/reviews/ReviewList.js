import React from 'react';
import { Divider, Header, Comment, Message } from 'semantic-ui-react';

import Review from './Review';

const ReviewList = ({
  reviews,
  restaurantId,
  currentUser,
  deleteReview,
  editReview
}) => {
  const reviewsArr = reviews
    .filter((review) => review.restaurant_id === restaurantId)
    .sort((a, b) =>
      Date.parse(a.created_at) < Date.parse(b.created_at) ? 1 : -1
    );
  return (
    <>
      <Divider section horizontal>
        <Header as='h2'>REVIEWS ({reviewsArr.length})</Header>
      </Divider>
      {reviewsArr.length > 0 ? (
        <Comment.Group>
          {reviewsArr.map(
            ({ id, text, rating, edited, created_at, user: { username } }) => (
              <Review
                key={id}
                id={id}
                originalText={text}
                originalRating={rating}
                edited={edited}
                createdAt={created_at}
                username={username}
                currentUser={currentUser}
                deleteReview={deleteReview}
                editReview={editReview}
              />
            )
          )}
        </Comment.Group>
      ) : (
        <Message>
          <Message.Header>No Reviews</Message.Header>
          <p>
            It looks like there are no reviews here yet. Be the first to leave a
            review.
          </p>
        </Message>
      )}
    </>
  );
};

export default ReviewList;
