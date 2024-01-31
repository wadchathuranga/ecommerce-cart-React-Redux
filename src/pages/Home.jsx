import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  // const {} = useSelector();

  useEffect(() => {
    //
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="px-5 py-5"></div>
    </div>
  );
};

export default Home;
