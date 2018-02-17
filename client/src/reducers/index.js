import { combineReducers } from 'redux';
import customersReducer from './customersReducer';
import adminReducer from './adminReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  customers: customersReducer,
  admin: adminReducer,
  user: userReducer
});

export default rootReducer;
