import { API_KEY } from '@themovie/base/constants';
import axios from 'axios';

export async function getData(params?: any) {
  const { data } = await axios({
    params: {
      ...(params ?? {}),
      apikey: API_KEY,
    },
  });
  return data;
}
