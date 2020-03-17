const initialState = {
  restaurants: [],
  restaurantDetails: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_RESTAURANTS':
      console.log('restaurants loading...', action);
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
    case 'LOADING_RESTAURANT_DETAILS':
      console.log('restaurant details loading...', action);
      return {
        ...state,
        restaurantDetails: { ...state.restaurantDetails },
        loading: true
      };
    case 'SHOW_RESTAURANT_DETAILS':
      console.log('restaurant details shown!', action);
      return {
        ...state,
        restaurantDetails: action.restaurant,
        loading: false
      };
    default:
      return state;
  }
};
