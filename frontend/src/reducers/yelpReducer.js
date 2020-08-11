const initialState = {
  restaurants: [],
  restaurantDetails: {},
  savedRestaurants: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_RESTAURANTS':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_RESTAURANTS':
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false
      };
    case 'LOADING_RESTAURANT_DETAILS':
      return {
        ...state,
        loading: true
      };
    case 'SHOW_RESTAURANT_DETAILS':
      return {
        ...state,
        restaurantDetails: action.restaurant,
        loading: false
      };
    case 'SAVE_RESTAURANT':
      return {
        ...state,
        savedRestaurants: [...state.savedRestaurants, action.restaurant]
      };
    case 'UNSAVE_RESTAURANT':
      return {
        ...state,
        savedRestaurants: state.savedRestaurants.filter(
          (rest) => rest.id !== action.id
        )
      };
    case 'FETCH_SAVED_RESTAURANTS':
      return {
        ...state,
        savedRestaurants: action.restaurants
      };
    case 'LOADING_HOT_AND_NEW_RESTAURANTS':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_HOT_AND_NEW_RESTAURANTS':
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false
      };
    default:
      return state;
  }
};
