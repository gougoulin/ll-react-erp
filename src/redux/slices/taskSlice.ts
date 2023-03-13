import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskItem {
  name: string;
  type: string;
  state: string;
  unit: string;
  updateAt: string;
  duration: string;
}

const initialState = {
  area: ["area1", "area2", "area3", "area4", "area5"],
  dept: ["dept. 1", "dept. 2", "dept. 3", "dept. 4", "dept. 5"],
  total: 13,
  taskList: JSON.stringify([
    {
      name: "job 1 job 1",
      type: "urgent",
      state: "done",
      unit: "IT",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 1 job 1",
      type: "urgent",
      state: "done",
      unit: "Data Team",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 2 job 2",
      type: "urgent",
      state: "open",
      unit: "Market",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 3 job 3",
      type: "urgent",
      state: "open",
      unit: "Finance",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 4 job 4",
      type: "urgent",
      state: "done",
      unit: "Design",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 1 job 1",
      type: "urgent",
      state: "done",
      unit: "IT",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 1 job 1",
      type: "urgent",
      state: "done",
      unit: "IT",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 4 job 4",
      type: "urgent",
      state: "done",
      unit: "Design",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 1 job 1",
      type: "urgent",
      state: "done",
      unit: "IT",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 1 job 1",
      type: "urgent",
      state: "done",
      unit: "IT",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 4 job 4",
      type: "urgent",
      state: "done",
      unit: "Design",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 1 job 1",
      type: "urgent",
      state: "done",
      unit: "IT",
      updateAt: "2023-01-20",
      duration: "2h30m"
    },
    {
      name: "job 1 job 1",
      type: "urgent",
      state: "done",
      unit: "IT",
      updateAt: "2023-01-20",
      duration: "2h30m"
    }
  ])
};

export type MessageState = typeof initialState;

const taskSlice = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    initArea(state, action: PayloadAction<string[]>) {
      state.area = action.payload;
    },
    initDept(state, action: PayloadAction<string[]>) {
      state.dept = action.payload;
    }
  }
});

export const { initArea, initDept } = taskSlice.actions;

export default taskSlice.reducer;
