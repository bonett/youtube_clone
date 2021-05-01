import axios from 'axios';

export function fetchPopularVideoList({ query }) {
  return axios.request({
    method: 'GET',
    url: `https://bing-video-search1.p.rapidapi.com/videos/search?q=${query}`,
    headers: {
      'X-RapidAPI-Key': '83f23e663dmshd1a3ea61cf7e548p1d85f6jsnc0432a4b3ca9'
    }
  });
}
