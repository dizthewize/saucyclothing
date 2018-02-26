import { combineReducers } from 'redux';
import admin from './adminReducer';
import user from './userReducer';
import cart from './cartReducer';


const rootReducer = combineReducers({
  admin,
  user,
  cart
});

export default rootReducer;
