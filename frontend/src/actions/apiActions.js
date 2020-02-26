import axios from 'axios';

export const fetchRestaurants = (searchValues) => {
  const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESTAURANTS' });
    axios
      .get(
        `${corsApiUrl}https://api.yelp.com/v3/businesses/search?categories=restaurants&term=${searchValues.term}&location=${searchValues.location}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        }
      )
      .then((res) =>
        dispatch({ type: 'ADD_RESTAURANTS', restaurants: res.data.businesses })
      )
      .catch((error) => console.log(error.response));
  };
};

export const clearRestaurants = () => ({
  type: 'CLEAR_RESTAURANTS'
});
