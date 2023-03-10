import {
  createHashRouter,
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import LoginBase from "../pages/LoginBase";
import Login from "../pages/Login";
import Home from "../pages/Home";
import LoginPasswordReset from "../pages/LoginPasswordReset";
import LoginSignup from "../pages/LoginSignup";
import { login, main } from "./constants";
import HomePageLayout from "../components/layout/HomePageLayout";
import Agenda from "../pages/Agenda";
import Contact from "../pages/Contact";
import Email from "../pages/Email";
import Meeting from "../pages/Meeting";
import Project from "../pages/Project";
import Setting from "../pages/Setting";
import Task from "../pages/Task";
import Team from "../pages/Team";

const router = createBrowserRouter([
  {
    path: login.index,
    element: <LoginBase />,
    children: [
      { index: true, element: <Login /> },
      { path: login.passwordReset, element: <LoginPasswordReset /> },
      { path: login.signin, element: <LoginSignup /> },
      { path: login.others, element: <Navigate to="/" /> }
    ]
  },
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: main.agenda, element: <Agenda /> },
      { path: main.contact, element: <Contact /> },
      { path: main.email, element: <Email /> },
      { path: main.home, element: <Home /> },
      { path: main.meeting, element: <Meeting /> },
      { path: main.project, element: <Project /> },
      { path: main.setting, element: <Setting /> },
      { path: main.task, element: <Task /> },
      { path: main.team, element: <Team /> },
      { path: "*", element: <Navigate to="/" /> }
    ]
  }
]);

export default router;
