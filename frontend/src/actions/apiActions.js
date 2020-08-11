export const addReview = (review) => ({
  type: 'ADD_REVIEW',
  review
});

export const fetchReviews = (reviews) => ({
  type: 'FETCH_REVIEWS',
  reviews
});

export const deleteReview = (id) => ({
  type: 'DELETE_REVIEW',
  id
});

export const editReview = (review) => ({
  type: 'EDIT_REVIEW',
  review
});
