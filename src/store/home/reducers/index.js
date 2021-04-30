import { combineReducers } from 'redux';
import at from '../types';

export const Home = (state = {}, action) => {
  switch (action.type) {
    case at.FETCH_REQUEST: {
      return 'loading';
    }
    default:
      return state;
  }
};

export default combineReducers({
  Home
});
