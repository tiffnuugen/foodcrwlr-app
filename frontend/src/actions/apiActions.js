export const addReview = (review) => ({
  type: 'ADD_REVIEW',
  review
});

export const fetchReviews = (reviews) => ({
  type: 'FETCH_REVIEWS',
  reviews
});
