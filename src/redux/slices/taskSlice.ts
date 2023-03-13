import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export type MessageState = typeof initialState;

const taskSlice = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    empty(state) {
      state = initialState;
    }
  }
});

export const { empty } = taskSlice.actions;

export default taskSlice.reducer;
