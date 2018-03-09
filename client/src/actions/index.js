import axios from 'axios';
import {
  ADD_CUSTOMERS,
  CURRENT_USER,
  ADMIN_USERS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_PRODUCTS,
  GET_PRODUCT,
  STRIPE_PAYMENT
 } from './types';

export const registerUser = values => async dispatch => {
  const res = await axios.post('/api/register', values);

  dispatch({ type: CURRENT_USER, payload: res.data });
}

export const loginUser = values => async dispatch => {
  const res = await axios.post('/api/login', values);

  dispatch({ type: CURRENT_USER, payload: res.data })
}

export const getUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({type: CURRENT_USER, payload: res.data});
}

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

export const adminUsers = () => async dispatch => {
  const res = await axios.get('/api/admin/users');

  dispatch({type: ADMIN_USERS, payload: res.data});
}

export const stripePayment = values => async dispatch => {
  const res = await axios.post('/api/stripe', values);

  dispatch({type: STRIPE_PAYMENT});
}