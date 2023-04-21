/* eslint-disable import/prefer-default-export */
import io from 'socket.io-client';
import { API_HOST } from './constants';

const baseURL = API_HOST;

const getSocket = () => {
  const socketWithLanServer = io(baseURL, {
    transports: ['websocket'],
  });
  return socketWithLanServer;
};

export { getSocket };
