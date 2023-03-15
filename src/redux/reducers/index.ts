import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";
import authReducer from "../slices/authSlice";
import asideSlice from "../slices/asideSlice";
import messageSlice from "../slices/messageSlice";
import dashboardSlice from "../slices/dashboardSlice";
import taskSlice from "../slices/taskSlice";
import attendenceSlice from "../slices/attendenceSlice";

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  layout: asideSlice,
  message: messageSlice,
  aside: asideSlice,
  dashboard: dashboardSlice,
  task: taskSlice,
  attendance: attendenceSlice
});
