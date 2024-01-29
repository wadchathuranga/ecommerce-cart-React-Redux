import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Home
      <div>
        <button
          type="button"
          className="bg-blue-600 rounded px-3 py-1 text-white"
          onClick={() => dispatch(logout())}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Home;
