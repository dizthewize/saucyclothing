import { combineReducers } from 'redux';
import customersReducer from './customersReducer'

const rootReducer = combineReducers({
  customers: customersReducer
});

export default rootReducer;
