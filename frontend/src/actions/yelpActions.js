import axios from 'axios';

export const fetchRestaurants = (searchValues) => {
  const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESTAURANTS' });
    axios
      .post('http://localhost:3001/search', {
        term: searchValues.term,
        location: searchValues.location
      })
      .then((res) => {
        dispatch({ type: 'ADD_RESTAURANTS', restaurants: res.data.businesses });
      })
      .catch((error) => console.log(error.response));
  };
};

export const showRestaurantDetails = (id) => {
  const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESTAURANT_DETAILS' });
    axios
      .get(`${corsApiUrl}https://api.yelp.com/v3/businesses/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      })
      .then((res) =>
        dispatch({ type: 'SHOW_RESTAURANT_DETAILS', restaurant: res.data })
      )
      .catch((error) => console.log(error.response));
  };
};

export const clearRestaurants = () => ({
  type: 'CLEAR_RESTAURANTS'
});
