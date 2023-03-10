import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isMiniSider: false,
  narrowWidth: "3em",
  wideWidth: "15em",
  menu: [
    "task",
    "project",
    "email",
    "team",
    "agenda",
    "meeting",
    "contact",
    "setting"
  ].join("@@"),
  username: ""
};

export type AsideState = typeof initialState;

const asideSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    toggleSider(state) {
      state.isMiniSider = !state.isMiniSider;
    },
    setMenu(state, action: PayloadAction<string>) {
      state.menu = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    }
  }
});

export const { toggleSider, setUserName, setMenu } = asideSlice.actions;

export default asideSlice.reducer;
