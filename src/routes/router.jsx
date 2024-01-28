import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../pages/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: (
      //     <Protected authentication={false}>
      //       <Login />
      //     </Protected>
      //   ),
      // },
      // {
      //   path: "/register",
      //   element: (
      //     <Protected authentication={false}>
      //       <Signup />
      //     </Protected>
      //   ),
      // },
      // {
      //   path: "/doctors",
      //   element: (
      //     <Protected authentication>
      //       <DoctorsDetails />
      //     </Protected>
      //   ),
      // },
      // {
      //   path: "/services",
      //   element: <Services />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "/users/profile/me",
      //   element: (
      //     <Protected authentication>
      //       <MyAccount />
      //     </Protected>
      //   ),
      // },
      // {
      //   path: "doctors/profile/me",
      //   element: (
      //     <Protected authentication>
      //       <Dashboard />
      //     </Protected>
      //   ),
      // },
    ],
  },
]);
