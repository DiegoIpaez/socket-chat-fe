export const PUBLIC_ROUTE_PATHS = {
  NOT_FOUND: '*',
  HOME: '/',
};

export const PRIVATE_ROUTE_PATHS = {
  CHAT: '/chat',
};

export const ROUTE_PATHS = { ...PUBLIC_ROUTE_PATHS, ...PRIVATE_ROUTE_PATHS };
