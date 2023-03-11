import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  photoUri:
    "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUsernaem(state, action: PayloadAction<string>) {
      state.fullname = action.payload;
    },
    setPhoteUri(state, action: PayloadAction<string>) {
      state.photoUri = action.payload;
    }
  }
});

export const { setUsernaem, setPhoteUri } = userSlice.actions;

export default userSlice.reducer;
