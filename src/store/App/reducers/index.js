import { combineReducers } from 'redux';
import at from '../types';

export const darkMode = (state = true, action) => {
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

export const popularVideos = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_SUCCESS: {
      return {
        ...state,
        popularList: action.popularList
      };
    }
    case at.FETCH_FAILURE: {
      return {
        ...state,
        errorStatus: 'failed'
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  darkMode,
  popularVideos
});
