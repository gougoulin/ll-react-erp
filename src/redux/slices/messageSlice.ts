import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  errors: [] as string[],
  success: [] as string[],
  warn: [] as string[]
};

export type MessageState = typeof initialState;

const messageSlice = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    empty(state) {
      state = initialState;
    },
    addError(state, action: PayloadAction<string>) {
      state.errors.push(action.payload);
    },
    addSuccess(state, action: PayloadAction<string>) {
      state.success.push(action.payload);
    },
    addWarn(state, action: PayloadAction<string>) {
      state.warn.push(action.payload);
    }
  }
});

export const { empty, addError, addSuccess, addWarn } = messageSlice.actions;

export default messageSlice.reducer;
