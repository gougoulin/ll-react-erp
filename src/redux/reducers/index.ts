import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";
import authReducer from "../slices/authSlice";
import asideSlice from "../slices/asideSlice";
import messageSlice from "../slices/messageSlice";

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  layout: asideSlice,
  message: messageSlice,
  aside: asideSlice
});
