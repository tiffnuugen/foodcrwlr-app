import { combineReducers } from 'redux';

import authReducer from './authReducer';
import apiReducer from './apiReducer';
import reviewsReducer from './reviewsReducer';

const appReducer = combineReducers({
  auth: authReducer,
  api: apiReducer,
  reviews: reviewsReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    console.log('logout user action:', action);
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
