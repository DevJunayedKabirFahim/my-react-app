import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from '../features/auth/Login';

const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children: [
      {
        path:"login",
        Component: Login
      }
    ]
  }
]);

export default router;

