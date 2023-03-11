import {
  createHashRouter,
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import RootOutlet from "../pages/RootOutlet";
import Login from "../pages/Login";
import LoginPasswordReset from "../pages/LoginPasswordReset";
import LoginSignup from "../pages/LoginSignup";
import { login, main } from "./constants";
import HomePageWithOutlet from "../pages/HomePageWithOutlet";
import Agenda from "../pages/Agenda";
import Contact from "../pages/Contact";
import Email from "../pages/Email";
import Meeting from "../pages/Meeting";
import Project from "../pages/Project";
import Setting from "../pages/Setting";
import Dashboard from "../pages/Dashboard";
import Team from "../pages/Team";

const router = createBrowserRouter([
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
      { index: true, path: main.dashboard, element: <Dashboard /> },
      { path: main.agenda, element: <Agenda /> },
      { path: main.contact, element: <Contact /> },
      { path: main.email, element: <Email /> },
      { path: main.meeting, element: <Meeting /> },
      { path: main.project, element: <Project /> },
      { path: main.setting, element: <Setting /> },
      { path: main.team, element: <Team /> },
      { path: "*", element: <Navigate to={main.dashboard} /> }
    ]
  }
]);

export default router;
