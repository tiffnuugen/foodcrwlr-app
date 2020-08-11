import { combineReducers } from 'redux';

import authReducer from './authReducer';
import yelpReducer from './yelpReducer';
import apiReducer from './apiReducer';

const appReducer = combineReducers({
  auth: authReducer,
  yelp: yelpReducer,
  api: apiReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
