export * from './regex.constant';
export * from './routePaths.constant';
export * from './usualMessages.constant';

export const API_HOST: string = import.meta.env.VITE_API_HOST ?? '';
export const API_ROUTE: string = import.meta.env.VITE_API_ROUTE ?? '';
export const API_URL: string = import.meta.env.VITE_API_URL ?? '';

export const LOCAL_STORAGE_KEYS = {
  TOKEN_KEY: 'token',
  USER_KEY: 'user',
};
