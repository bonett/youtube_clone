import { combineReducers } from 'redux';
import at from '../types';

export const showLoader = (state = false, action) => {
  switch (action.type) {
    case at.SHOW_LOADER_CONTENT: {
      return true;
    }
    case at.HIDE_LOADER_CONTENT: {
      return false;
    }
    default:
      return state;
  }
};

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

export const queryType = (state = { query: 'all' }, action) => {
  switch (action.type) {
    case at.GET_QUERY_TYPE: {
      return { ...state };
    }
    case at.SET_QUERY_TYPE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const userSubscription = (state = false, action) => {
  switch (action.type) {
    case at.GET_USER_SUBSCRIPTION: {
      return { ...state };
    }
    case at.SET_USER_SUBSCRIPTION: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const popularVideos = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_SUCCESS_POPULAR_VIDEOS: {
      return action.popularVideos;
    }
    case at.FETCH_FAILURE_POPULAR_VIDEOS: {
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
  popularVideos,
  queryType,
  userSubscription,
  showLoader
});
