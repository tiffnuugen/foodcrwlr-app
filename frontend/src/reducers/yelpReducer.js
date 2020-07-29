const initialState = {
  restaurants: [],
  restaurantDetails: {},
  savedRestaurants: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_RESTAURANTS':
      console.log('restaurants loading...', action);
      return {
        ...state,
        loading: true
      };
    case 'FETCH_RESTAURANTS':
      console.log('restaurants fetched!', action);
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false
      };
    case 'LOADING_RESTAURANT_DETAILS':
      console.log('restaurant details loading...', action);
      return {
        ...state,
        loading: true
      };
    case 'SHOW_RESTAURANT_DETAILS':
      console.log('restaurant details shown!', action);
      return {
        ...state,
        restaurantDetails: action.restaurant,
        loading: false
      };
    case 'SAVE_RESTAURANT':
      console.log('restaurant saved!', action);
      return {
        ...state,
        savedRestaurants: [...state.savedRestaurants, action.restaurant]
      };
    case 'UNSAVE_RESTAURANT':
      console.log('restaurant unsaved!', action);
      return {
        ...state,
        savedRestaurants: state.savedRestaurants.filter(
          (rest) => rest.id !== action.id
        )
      };
    case 'FETCH_SAVED_RESTAURANTS':
      console.log('saved restaurants fetched!', action);
      return {
        ...state,
        savedRestaurants: action.restaurants
      };
    default:
      return state;
  }
};
