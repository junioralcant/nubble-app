import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer MzQ.SyUw6DseLaGXifRl4nxqfNmA8vSQlV6l7hr_8FxzkO29UYKZj5mcsdb_pzfP',
  },
});
