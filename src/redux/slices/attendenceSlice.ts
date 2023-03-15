import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AttendanceItem {
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
  total: 11,
  cards: [
    [
      "regular check-in this month",
      "102",
      "last week",
      "180 employees",
      "ATTENDANCE_CHECK"
    ],
    ["late this month", "5", "last week", "32 employees", "ATTENDANCE_LATE"],
    [
      "on leave this month",
      "12",
      "last week",
      "3 employees",
      "ATTENDANCE_ABSENT"
    ],
    [
      "leave early this month",
      "1",
      "last week",
      "0 employees",
      "ATTENDANCE_WARN"
    ]
  ],
  dataList: JSON.stringify([
    {
      name: "Tim Smith",
      "employee id": "1",
      postion: "manager",
      "dept.": "Finance",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Tom Smith",
      "employee id": "1",
      postion: "manager",
      "dept.": "Admin",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Jack Smith",
      "employee id": "1",
      postion: "manager",
      "dept.": "IT",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Jim Smith",
      "employee id": "1",
      postion: "manager",
      "dept.": "IT",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Adam Smith",
      "employee id": "1",
      postion: "manager",
      "dept.": "IT",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Tim Smith",
      "employee id": "1",
      postion: "manager",
      "dept.": "Market",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Tom Smith",
      "employee id": "1",
      postion: "Finance",
      "dept.": "IT",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Jack Smith",
      "employee id": "1",
      postion: "Design",
      "dept.": "IT",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Jim Smith",
      "employee id": "1",
      postion: "Buyer",
      "dept.": "IT",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Adam Smith",
      "employee id": "1",
      postion: "manager",
      "dept.": "Admin",
      "start at": "2023-01-20",
      attendance: "absent"
    },
    {
      name: "Adam Smith",
      "employee id": "1",
      postion: "manager",
      "dept.": "Admin",
      "start at": "2023-01-20",
      attendance: "absent"
    }
  ])
};

export type AttendanceState = typeof initialState;

const attendanceSlice = createSlice({
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

export const { initArea, initDept } = attendanceSlice.actions;

export default attendanceSlice.reducer;
