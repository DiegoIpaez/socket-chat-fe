const getLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key) ?? '[]');

const setLocalStorage = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeLocalStorage = (key: string) => localStorage.removeItem(key);

const removeAllLocalStorage = () => localStorage.clear();

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  removeAllLocalStorage,
};
