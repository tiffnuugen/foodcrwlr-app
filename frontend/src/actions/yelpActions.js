import axios from 'axios';

export const fetchRestaurants = (searchValues) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESTAURANTS' });
    axios
      .post('http://localhost:3001/search', {
        term: searchValues.term,
        location: searchValues.location
      })
      .then((res) => {
        dispatch({
          type: 'FETCH_RESTAURANTS',
          restaurants: res.data.businesses
        });
      })
      .catch((error) => console.log(error.response));
  };
};

export const fetchHotAndNewRestaurants = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HOT_AND_NEW_RESTAURANTS' });
    axios
      .get('http://localhost:3001/hot_and_new')
      .then((res) => {
        dispatch({
          type: 'FETCH_HOT_AND_NEW_RESTAURANTS',
          restaurants: res.data.businesses
        });
      })
      .catch((error) => console.log(error.response));
  };
};

export const showRestaurantDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESTAURANT_DETAILS' });
    axios
      .post('http://localhost:3001/details', {
        id: id
      })
      .then((res) => {
        dispatch({ type: 'SHOW_RESTAURANT_DETAILS', restaurant: res.data });
      })
      .catch((error) => console.log(error.response));
  };
};

export const saveRestaurant = (restaurant) => ({
  type: 'SAVE_RESTAURANT',
  restaurant
});

export const unsaveRestaurant = (id) => ({
  type: 'UNSAVE_RESTAURANT',
  id
});

export const fetchSavedRestaurants = (restaurants) => ({
  type: 'FETCH_SAVED_RESTAURANTS',
  restaurants
});
