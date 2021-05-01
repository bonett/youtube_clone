import axios from 'axios';

export function fetchVideos() {
  return axios.request({
    method: 'GET',
    url: `qwewq/videos`
  });
}
