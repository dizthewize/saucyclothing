import { ADD_CUSTOMERS } from '../actions/types';


export default (state = [], action) => {
  switch (action.type) {

    case ADD_CUSTOMERS:
      return [ ...state, action.payload ]
      
    default:
      return state;
  }
}
