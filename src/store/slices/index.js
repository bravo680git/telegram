import controlSlices from "./controlSlices";
import chatSlice from "./chatSlice";

const rootReducer = {
  control: controlSlices,
  chat: chatSlice,
};

export default rootReducer;
