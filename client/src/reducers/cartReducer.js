import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [ ...state, action.shirt ]
    case REMOVE_FROM_CART:
      return state.filter(({id}) => id !== action.id);
    default:
      return state;
  }
}