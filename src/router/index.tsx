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
import { login } from "./constants";

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
    element: <Home />,
    children: [
      { index: true, element: <Login /> },
      { path: "*", element: <Navigate to="/" /> }
    ]
  }
]);

export default router;
