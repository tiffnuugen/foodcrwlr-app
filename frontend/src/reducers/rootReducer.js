import { combineReducers } from 'redux';
import authReducer from './authReducer';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  authReducer,
  apiReducer
});

export default rootReducer;
