import axios from 'axios';
import {
  ADD_CUSTOMERS,
  CURRENT_USER,
  ADMIN_USERS
 } from './types';

export const getCustomers = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(customers => dispatch({type: ADD_CUSTOMERS, payload: customers}))
}

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

export const adminUsers = () => async dispatch => {
  const res = await axios.get('/api/admin/users');

  dispatch({type: ADMIN_USERS, payload: res.data});
}