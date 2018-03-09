import { ADD_TO_CART, REMOVE_FROM_CART, STRIPE_PAYMENT } from '../actions/types';

const cart = localStorage.getItem('cart');

// const initialState = {
//   items: []
// }

export default (state = JSON.parse(cart) || [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      localStorage.setItem('cart', JSON.stringify([action.shirt, ...state]));
      return [action.shirt, ...state]
    case REMOVE_FROM_CART:
      let newCart = state.filter(({id}) => id !== action.id)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart;
    case STRIPE_PAYMENT:
			localStorage.removeItem('cart');
			return state;
    default:
      return state;
  }
}