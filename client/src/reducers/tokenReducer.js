import { TOKEN, DELETE_TOKEN } from '../actions/types';

const jwtToken = localStorage.getItem('jwtToken');

export default (state = JSON.parse(jwtToken) || "", action) => {
  switch (action.type) {
    case TOKEN:
      return action.tokenReceived;
    case DELETE_TOKEN:
      return action.tokenRemoved;
    default:
      return state;
  }
}