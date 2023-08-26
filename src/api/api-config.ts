import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer Mw.2aEhvE8sdkU788Ay3gTRm9PrEDaWkB1Fx3h9G5n0ANdwXsRVlt62vTNW2-ZD',
  },
});
