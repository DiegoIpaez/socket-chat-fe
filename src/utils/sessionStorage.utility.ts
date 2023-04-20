const setSessionStorage = (key: string, data: object) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const getSessionStorage = (key: string) => JSON.parse(sessionStorage.getItem(key) ?? '[]');

const removeSessionStorage = (key: string) => sessionStorage.removeItem(key);

const removeAllSessionStorage = () => sessionStorage.clear();

export {
  getSessionStorage,
  setSessionStorage,
  removeAllSessionStorage,
  removeSessionStorage,
};
