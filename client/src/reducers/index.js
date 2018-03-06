import { combineReducers } from 'redux';
import admin from './adminReducer';
import user from './userReducer';
import cart from './cartReducer';
import products from './productsReducer';


const rootReducer = combineReducers({
  admin,
  user,
  cart,
  products
});

export default rootReducer;
