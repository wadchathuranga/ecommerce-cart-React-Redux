import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import NotFound from "../pages/NotFound.jsx";

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
      {
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "/login",
        element: (
          // <Protected authentication={false}>
          <Login />
          // </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          // <Protected authentication={false}>
          <Signup />
          // </Protected>
        ),
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/users/profile/me",
      //   element: (
      //     <Protected authentication>
      //       <MyAccount />
      //     </Protected>
      //   ),
      // },
    ],
  },
]);
