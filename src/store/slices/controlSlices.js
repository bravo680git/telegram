import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: "start",
  content: "main",
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
  },
});

export default controlSlice.reducer;
export const { setSidebarControl, setContentControl } = controlSlice.actions;
