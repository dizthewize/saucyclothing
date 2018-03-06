import { GET_PRODUCTS, GET_PRODUCT } from '../actions/types';

const initialState = {
  products: [],
  product: {},
  images: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload, images: action.payload.slice(0,4) }
    case GET_PRODUCT:
      return { ...state, product: action.payload }
    default:
      return state;
  }
}