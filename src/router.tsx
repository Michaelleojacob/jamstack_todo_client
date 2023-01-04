import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./components/layout/layout";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          // public signin and signout
          { path: "/signin", element: <Signin /> },
          { path: "/signup", element: <Signup /> },
          // private projects, tasks
          {},
        ],
      },
    ],
  },
]);

export default router;
