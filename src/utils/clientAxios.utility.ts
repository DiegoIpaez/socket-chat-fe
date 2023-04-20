import axios from 'axios';
import { getLocalStorage, removeAllLocalStorage } from './localStorage.utility';
import { removeAllSessionStorage } from './sessionStorage.utility';
import { API_URL } from '../constants';

const defaultOptions = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const clientAxios = axios.create(defaultOptions);

clientAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      removeAllLocalStorage();
      removeAllSessionStorage();
      window.location.href = '/';
    }

    return Promise.reject(error);
  },
);

clientAxios.interceptors.request.use((config) => {
  const token = getLocalStorage('token');
  const customConfig = { ...config };
  if (config?.headers) customConfig.headers.authorization = token ?? '';
  return customConfig;
});

export default clientAxios;
