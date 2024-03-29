import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import Profile from "../pages/Profile.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import NotFound from "../pages/NotFound.jsx";
import Cart from "../pages/Cart.jsx";
import Order from "../pages/Order.jsx";
import OrderList from "../pages/OrderList.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-list" element={<OrderList />} />
      </Route>
    </Route>
  )
);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/not-found",
//         element: <NotFound />,
//       },
//       {
//         path: "/login",
//         element: (
//           // <Protected authentication={false}>
//           <Login />
//           // </Protected>
//         ),
//       },
//       {
//         path: "/signup",
//         element: (
//           // <Protected authentication={false}>
//           <Signup />
//           // </Protected>
//         ),
//       },
//       {
//         path: "/products",
//         element: <Products />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       // {
//       //   path: "/users/profile/me",
//       //   element: (
//       //     <Protected authentication>
//       //       <MyAccount />
//       //     </Protected>
//       //   ),
//       // },
//     ],
//   },
// ]);
