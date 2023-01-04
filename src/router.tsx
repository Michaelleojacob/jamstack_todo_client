import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ChangeStyle from "./components/test_components/change_style";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        children: [{ path: "/c", element: <ChangeStyle /> }],
      },
    ],
  },
]);

export default router;

// import {
//   createRoutesFromElements,
//   createBrowserRouter,
//   Route,
// } from "react-router-dom";
// import ThemeProvider from "./components/themeContext/themeContext";
// import App from "./App";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route element={<ThemeProvider />}></Route>
//     </Route>
//   )
// );

// export default router;
