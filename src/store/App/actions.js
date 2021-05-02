import at from './types';

export const getDarkMode = () => ({
  type: at.GET_DARK_MODE
});

export const setDarkMode = (payload) => ({
  type: at.SET_DARK_MODE,
  payload
});

export const showLoaderContent = () => ({
  type: at.SHOW_LOADER_CONTENT
});

export const hideLoaderContent = () => ({
  type: at.HIDE_LOADER_CONTENT
});

export const getQueryType = () => ({
  type: at.GET_QUERY_TYPE
});

export const setQueryType = (payload) => ({
  type: at.SET_QUERY_TYPE,
  payload
});

export const getUserSubscription = () => ({
  type: at.GET_USER_SUBSCRIPTION
});

export const setUserSubscription = (payload) => ({
  type: at.SET_USER_SUBSCRIPTION,
  payload
});

export const fetchPopularVideos = (payload) => ({
  type: at.FETCH_POPULAR_VIDEOS,
  payload
});
