import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCurrentChat: (state, action) => ({
      ...state,
      currentChat: action.payload,
    }),
    clearCurrentChat: (state) => ({
      ...state,
      currentChat: null,
    }),
  },
});

export default chatSlice.reducer;
export const { setCurrentChat, clearCurrentChat } = chatSlice.actions;
