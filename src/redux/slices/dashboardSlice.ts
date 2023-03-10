import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

const initChartData = {
  xAxis: {
    type: "category",
    data: ["Week 1", "Week 2", "Week 3", "Week 4"],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    show: false
  },
  series: [
    {
      data: [120, 200, 150, 80] as any[],
      type: "bar"
    }
  ]
};

export type BarChartDataType = typeof initChartData;

const initialState = {
  welcomeSection: {
    imgUri:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    welcomeText: "Welcome back. Meet new challenges!",
    clockInBtnText: "clock in"
  },
  weatherSection: {
    temperature: "16℃",
    description: "cloudy",
    weather: "CLOUDY"
  },
  todoSection: {
    items: JSON.stringify([
      {
        location: "loca 1",
        "dept.": "dept 1",
        employee: "empl 1",
        date: "2023-03-12",
        in: "08:49",
        out: "18:09",
        count: "2",
        action: ["view"]
      },
      {
        location: "loca 2",
        "dept.": "dept 2",
        employee: "empl 2",
        date: "2023-03-12",
        in: "08:49",
        out: "18:09",
        count: "2",
        action: ["view"]
      },
      {
        location: "loca 3",
        "dept.": "dept 3",
        employee: "empl 3",
        date: "2023-03-12",
        in: "08:49",
        out: "18:09",
        count: "2",
        action: ["view"]
      },
      {
        location: "loca 4",
        "dept.": "dept 4",
        employee: "empl 4",
        date: "2023-03-12",
        in: "08:49",
        out: "18:09",
        count: "2",
        action: ["view"]
      }
    ])
  },
  performanceSection: {
    option: JSON.stringify(initChartData),
    title: "performance"
  },
  newsSection: {
    title: "news",
    actionText: "more",
    data: [
      {
        txt: "some breaking news",
        date: moment().format("YYYY-MM-DD")
      },
      {
        txt: "some breaking news",
        date: moment().format("YYYY-MM-DD")
      },
      {
        txt: "some breaking news",
        date: moment().format("YYYY-MM-DD")
      },
      {
        txt: "some breaking news",
        date: moment().format("YYYY-MM-DD")
      },
      {
        txt: "some breaking news",
        date: moment().format("YYYY-MM-DD")
      },
      {
        txt: "some breaking news",
        date: moment().format("YYYY-MM-DD")
      }
    ]
  },
  scheduleSection: {
    title: "schedule",
    data: [
      {
        id: 1,
        txt: "Meeting with other departments, location: Root 201",
        date: moment().format("YYYY-MM-DD")
      },
      {
        id: 2,
        txt: "Meeting with other departments, location: Root 201",
        date: moment().format("YYYY-MM-DD")
      },
      {
        id: 3,
        txt: "Meeting with other departments, location: Root 201",
        date: moment().format("YYYY-MM-DD")
      },
      {
        id: 4,
        txt: "Meeting with other departments, location: Root 201",
        date: moment().format("YYYY-MM-DD")
      },
      {
        id: 5,
        txt: "Meeting with other departments, location: Root 201",
        date: moment().format("YYYY-MM-DD")
      },
      {
        id: 6,
        txt: "Meeting with other departments, location: Root 201",
        date: moment().format("YYYY-MM-DD")
      }
    ]
  },
  moreFeaturesSection: {
    title: "useful links",
    data: [
      { text: "video meeting", icon: "VIDEO_MEETING", color: "#00CCCC" },
      { text: "team learn", icon: "READING_GROUP", color: "#0066FF" },
      {
        text: "government websites",
        icon: "GOVERNMENT_SITES",
        color: "#FFCC00"
      },
      { text: "archieve", icon: "ARCHIEVE", color: "#0066FF" },
      { text: "records", icon: "EVENT", color: "#00CCCC" },
      { text: "hotel menu", icon: "HOTEL_MENU", color: "#FF1111" }
    ]
  },
  commonHeader: {
    data: ["home", "tasks", "attendance", "news"]
  }
};

export type DashboardState = typeof initialState;

const dashboardSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setWelcomeImg(state, action: PayloadAction<string>) {
      state.welcomeSection.imgUri = action.payload;
    }
  }
});

export const { setWelcomeImg } = dashboardSlice.actions;

export default dashboardSlice.reducer;
