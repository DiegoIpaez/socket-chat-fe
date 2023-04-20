import { configureStore } from '@reduxjs/toolkit';
import type { IUser } from '../interfaces';
import userSliceReducer from './states/user';

export interface AppStore {
  user: IUser;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
  },
});
