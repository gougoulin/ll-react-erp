import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  photoUri: ""
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
