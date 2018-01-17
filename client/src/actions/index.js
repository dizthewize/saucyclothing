import { ADD_CUSTOMERS } from './types'

export const getCustomers = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(customers => dispatch({type: ADD_CUSTOMERS, payload: customers}))
}
