const initialState = {
  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return { ...state };
    default:
      return state;
  }
};
