import { configureStore } from '@reduxjs/toolkit';
import type { IUser, IChat } from '../interfaces';
import userSliceReducer from './states/user';
import chatSliceReducer from './states/chat';

export interface AppStore {
  user: IUser;
  chat: IChat;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
    chat: chatSliceReducer,
  },
});
