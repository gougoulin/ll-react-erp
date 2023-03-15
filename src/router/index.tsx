import {
  createHashRouter,
  createBrowserRouter,
  NonIndexRouteObject,
  Navigate
} from "react-router-dom";
import RootOutlet from "../pages/RootOutlet";
import Login from "../pages/Login";
import LoginPasswordReset from "../pages/LoginPasswordReset";
import LoginSignup from "../pages/LoginSignup";
import { dashboradRoutes, login, main } from "./constants";
import HomePageWithOutlet from "../pages/HomePageWithOutlet";
import Agenda from "../pages/Agenda";
import Contact from "../pages/Contact";
import Email from "../pages/Email";
import Meeting from "../pages/Meeting";
import Project from "../pages/Project";
import Setting from "../pages/Setting";
import Dashboard from "../pages/Dashboard";
import Team from "../pages/Team";
import DashboardWithOutlet from "../pages/DashboardWithOutlet";
import Tasks from "../pages/Tasks";
import Attendance from "../pages/Attendance";
import News from "../pages/News";
import UnderConstruction from "../pages/UnderConstruction";

const router = createBrowserRouter(
  [
    {
      path: login.index,
      element: <RootOutlet />,
      children: [
        { index: true, element: <Login /> },
        { path: login.passwordReset, element: <LoginPasswordReset /> },
        { path: login.signin, element: <LoginSignup /> },
        { path: login.others, element: <Navigate to="/" /> }
      ]
    },
    {
      path: "/",
      element: <HomePageWithOutlet />,
      children: [
        {
          path: "dashboard",
          element: <DashboardWithOutlet />,
          children: [
            { index: true, element: <Dashboard /> },
            // { path: dashboradRoutes.home, element: <Dashboard /> },
            { path: dashboradRoutes.tasks, element: <Tasks /> },
            { path: dashboradRoutes.attendance, element: <Attendance /> },
            { path: dashboradRoutes.news, element: <UnderConstruction /> }
          ]
        },
        { path: main.agenda, element: <UnderConstruction /> },
        { path: main.contact, element: <UnderConstruction /> },
        { path: main.email, element: <UnderConstruction /> },
        { path: main.meeting, element: <UnderConstruction /> },
        { path: main.project, element: <UnderConstruction /> },
        { path: main.setting, element: <UnderConstruction /> },
        { path: main.team, element: <UnderConstruction /> }
      ]
    }
  ],
  { basename: "/" }
);

export default router;
