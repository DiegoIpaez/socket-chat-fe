import { createSlice } from '@reduxjs/toolkit';

const INITIAL_USER_STATE = {
  activeChat: false,
  recipientId: '',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState: INITIAL_USER_STATE,
  reducers: {
    createChat: (_state, action) => action.payload,
    resetChat: () => INITIAL_USER_STATE,
  },
});

export const { createChat, resetChat } = chatSlice.actions;

export default chatSlice.reducer;
