import { createSlice } from '@reduxjs/toolkit';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../../utils/localStorage.utility';
import { LOCAL_STORAGE_KEYS } from '../../utils/constants';

const { TOKEN_KEY, USER_KEY } = LOCAL_STORAGE_KEYS;

const INITIAL_USER_STATE = {
  uid: '',
  username: '',
  email: '',
  password: '',
  online: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getLocalStorage(USER_KEY)
    ? JSON.parse(localStorage.getItem(USER_KEY) as string)
    : INITIAL_USER_STATE,
  reducers: {
    createUser: (_state, action) => {
      setLocalStorage(USER_KEY, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const payload = { ...state, ...action.payload };
      setLocalStorage(USER_KEY, payload);
      return payload;
    },
    resetUser: () => {
      removeLocalStorage(USER_KEY);
      removeLocalStorage(TOKEN_KEY);
      return INITIAL_USER_STATE;
    },
  },
});

export const { createUser, resetUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
