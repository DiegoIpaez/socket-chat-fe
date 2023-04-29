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
  },
});

export const { createChat } = chatSlice.actions;

export default chatSlice.reducer;
