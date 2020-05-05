const initialState = {
  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      console.log('review added:', action);
      return { ...state.reviews, reviews: [...state.reviews, action.review] };
    case 'FETCH_REVIEWS':
      console.log('reviews fetched!', action);
      return { ...state, reviews: action.reviews };
    case 'DELETE_REVIEW':
      console.log('review deleted!', action);
      const reviews = state.reviews.filter((review) => review.id !== action.id);
      return { ...state, reviews: reviews };
    default:
      return state;
  }
};
