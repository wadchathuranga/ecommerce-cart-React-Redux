import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useFetchProductsMutation } from "../store/api/productsApiSlice";
import { setItems } from "../store/productsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);
  console.log("🚀 ~ Home ~ items:", items);
  // setItemList{items};

  const [fetchProducts, { isLoading }] = useFetchProductsMutation();

  useEffect(() => {
    const fetchProductList = async () => {
      const response = await fetchProducts().unwrap();
      console.log("🚀 ~ submitHandler ~ response:", response);
      dispatch(setItems(response));
    };

    fetchProductList();
  }, [dispatch, fetchProducts]);

  return (
    <div className="mx-5 my-5">
      <div className="flex flex-col gap-3">
        {items &&
          items.map((item) => <ProductCard key={item.id} product={item} />)}
        {/* <ProductCard /> */}
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
