import { CURRENT_USER, REMOVE_USER } from '../actions/types';

const initialState = {
  user: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, user: action.user};
    case REMOVE_USER:
      return { ...state, user: null};;
    default:
      return state;
  }
}