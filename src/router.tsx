import { createBrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/themeContext/themeContext";
import { AuthProvider } from "./components/authContext/authContext";
import Layout from "./components/layout/layout";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <ThemeProvider />,
        children: [
          {
            element: <AuthProvider />,
            children: [
              {
                path: "/",
                element: <Layout />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import ThemeProvider from "./components/themeContext/themeContext";
// import { AuthProvider } from "./components/authContext/authContext";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         children: [
//           {
//             element: <ThemeProvider />,
//             children: [{ element: <AuthProvider />, children: [] }],
//           },
//         ],
//       },
//     ],
//   },
// ]);

// export default router;

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
