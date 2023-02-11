import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: "start",
  content: "main",
  rightSidebar: null,
  selectMessages: false,
};

const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    setSidebarControl: (state, action) => ({
      ...state,
      sidebar: action.payload,
    }),
    setContentControl: (state, action) => ({
      ...state,
      content: action.payload,
    }),
    setRightSidebarControl: (state, action) => ({
      ...state,
      rightSidebar: action.payload,
    }),
    toogleOthersControl: (state, action) => ({
      ...state,
      [action.payload]: !state[action.payload],
    }),
  },
});

export default controlSlice.reducer;
export const {
  setSidebarControl,
  setContentControl,
  setRightSidebarControl,
  toogleOthersControl,
} = controlSlice.actions;
