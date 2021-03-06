const initialState = {
  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, action.review] };
    case 'FETCH_REVIEWS':
      return { ...state, reviews: action.reviews };
    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.id)
      };
    case 'EDIT_REVIEW':
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.review.id
            ? {
                ...review,
                text: action.review.text,
                rating: action.review.rating,
                edited: action.review.edited
              }
            : review
        )
      };
    default:
      return state;
  }
};
