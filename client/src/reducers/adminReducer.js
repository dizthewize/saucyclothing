import { ADMIN_USERS } from '../actions/types';

const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADMIN_USERS:
      return { ...state, users: action.payload }
      
    default:
      return state;
  }
}