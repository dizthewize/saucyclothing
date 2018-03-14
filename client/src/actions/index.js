import axios from 'axios';
import {
  CURRENT_USER,
  REMOVE_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_PRODUCTS,
  GET_PRODUCT,
  STRIPE_PAYMENT,
  TOKEN,
  DELETE_TOKEN
 } from './types';

// export const registerUser = values => async dispatch => {
//   const res = await axios.post('/api/register', values);

//   dispatch({ type: CURRENT_USER, payload: res.data });
// }

// export const loginUser = values => async dispatch => {
//   const res = await axios.post('/api/login', values);

//   dispatch({ type: CURRENT_USER, payload: res.data })
// }

// export const getUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');

//   dispatch({type: CURRENT_USER, payload: res.data});
// }

export const getProducts = () => async dispatch => {
  const res = await axios.get('/api/products');

  dispatch({type: GET_PRODUCTS, payload: res.data});
}

export const getProduct = id => async dispatch => {
  const res = await axios.get(`/api/product?id=${id}`);

  dispatch({type: GET_PRODUCT, payload: res.data});
}


export const addToCart = item => ({
  type: ADD_TO_CART, shirt: item 
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART, id: id
})

// export const adminUsers = () => async dispatch => {
//   const res = await axios.get('/api/admin/users');

//   dispatch({type: ADMIN_USERS, payload: res.data});
// }

export const stripePayment = values => async dispatch => {
  const res = await axios.post('/api/stripe', values);

  dispatch({type: STRIPE_PAYMENT});
}

export const getToken = (tokenReceived = '') => ({
  type: TOKEN, tokenReceived: tokenReceived
})

export const logout = () => ({
  type: DELETE_TOKEN, tokenRemoved: ''
})

export const getUser = user => ({
  type: CURRENT_USER, user:user
})

export const removeUser = () => ({
  type: REMOVE_USER
})

// export const getUser = token => async dispatch => {
//   const res = await axios.get(`/api/current_user/${token}`);

//   dispatch({type: CURRENT_USER, payload: res.data});
// }