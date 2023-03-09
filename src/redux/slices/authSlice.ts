import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isLogin: true, token: null as null | string };

export type AuthState = typeof initialState;

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLogin = true;
      state.token = action.payload;
    },
    logout(state) {
      state = initialState;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
