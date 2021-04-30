import at from './types';

export const fetch = (params, meta) => ({
  type: at.FETCH_REQUEST,
  params,
  meta
});
