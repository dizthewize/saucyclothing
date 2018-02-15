import {
  ADD_CUSTOMERS,
  REGISTER_USER,
  LOGIN_USER,
  CURRENT_USER
 } from './types'

export const getCustomers = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(customers => dispatch({type: ADD_CUSTOMERS, payload: customers}))
}

export const registerUser = values => dispatch => {
  const res = await axios.post('/api/register', values);

  dispatch({ type: REGISTER_USER })
}

export const loginUser = values => dispatch => {
  const res = await axios.post('/api/login', values);

  dispatch({ type: LOGIN_USER })
}

export const getUser = () => dispatch => {
  const res = await axios.post('/api/current_user');

  dispatch({type: CURRENT_USER, payload: res.data});
}
