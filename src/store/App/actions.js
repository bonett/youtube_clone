import at from './types';

export const getDarkMode = () => ({
  type: at.GET_DARK_MODE
});

export const setDarkMode = (payload) => ({
  type: at.SET_DARK_MODE,
  payload
});

export const fetchPopularVideos = (payload) => ({
  type: at.FETCH_POPULAR_VIDEOS,
  payload
});
