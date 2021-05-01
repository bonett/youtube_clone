import { combineReducers } from 'redux';
import at from '../types';

export const darkMode = (state = false, action) => {
  switch (action.type) {
    case at.GET_DARK_MODE: {
      return { ...state };
    }
    case at.SET_DARK_MODE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const videoList = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_REQUEST: {
      return 'loading';
    }
    default:
      return state;
  }
};

export default combineReducers({
  darkMode,
  videoList
});
