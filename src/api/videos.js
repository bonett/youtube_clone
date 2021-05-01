import axios from 'axios';

export function fetchPopularVideoList({ query }) {
  return axios.request({
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyDBl5bCrN3Q3l9qLQgRBwwDGhkL4K07NAM&part=snippet&maxResults=50`
  });
}
