const initialState = {
  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      console.log('review added:', action);
      return { ...state.reviews, reviews: [...state.reviews, action.review] };
    default:
      return state;
  }
};
