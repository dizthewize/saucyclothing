import { combineReducers } from 'redux';
import admin from './adminReducer';
import user from './userReducer';
import cart from './cartReducer';
import products from './productsReducer';
import token from './tokenReducer';


const rootReducer = combineReducers({
  admin,
  user,
  cart,
  products,
  token
});

export default rootReducer;
