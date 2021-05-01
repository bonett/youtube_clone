import at from './types';

export const getDarkMode = () => ({
  type: at.GET_DARK_MODE
});

export const setDarkMode = (payload) => ({
  type: at.SET_DARK_MODE,
  payload
});

export const fetch = () => ({
  type: at.FETCH_REQUEST
});
