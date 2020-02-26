const initialState = {
  restaurants: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_RESTAURANTS':
      console.log('restaurants loaded!', action);
      return {
        ...state,
        restaurants: [...state.restaurants],
        loading: true
      };
    case 'ADD_RESTAURANTS':
      console.log('restaurants added!', action);
      return {
        ...state.restaurants,
        restaurants: action.restaurants,
        loading: false
      };
    case 'CLEAR_RESTAURANTS':
      console.log('restaurants cleared!', action);
      return initialState;
    default:
      return state;
  }
};
