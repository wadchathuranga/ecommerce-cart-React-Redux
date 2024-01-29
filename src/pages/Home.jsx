import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="mx-5 my-5">
      <div className="flex">
        <ProductCard />
        <ProductCard />
      </div>
      <br />
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
