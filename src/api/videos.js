import axios from 'axios';

export function fetchPopularVideoList({ payload }) {
  return axios.request({
    method: 'GET',
    url: `https://bing-video-search1.p.rapidapi.com/videos/search?q=${payload}`,
    headers: {
      'X-RapidAPI-Key': '83f23e663dmshd1a3ea61cf7e548p1d85f6jsnc0432a4b3ca9'
    }
  });
}
