import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
  cart: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.payload }
    case REMOVE_FROM_CART:
      return state.cart.filter(({id}) => id !== action.id);
    default:
      return state;
  }
}