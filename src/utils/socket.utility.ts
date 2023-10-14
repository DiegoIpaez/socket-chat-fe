/* eslint-disable import/prefer-default-export */
import io from 'socket.io-client';
import { API_HOST } from './constants';

const baseURL = API_HOST;

const getSocket = (token: string) => {
  const socketWithLanServer = io(baseURL, {
    transports: ['websocket'],
    query: {
      Autorization: token,
    },
  });
  return socketWithLanServer;
};

export { getSocket };
