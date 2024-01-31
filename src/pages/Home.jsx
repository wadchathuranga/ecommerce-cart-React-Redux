import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useFetchProductsMutation } from "../store/api/productsApiSlice";
import { setItems } from "../store/productsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);
  console.log("🚀 ~ Home ~ items:", items);

  const [fetchProducts, { isLoading }] = useFetchProductsMutation();

  useEffect(() => {
    const fetchProductList = async () => {
      const response = await fetchProducts().unwrap();
      dispatch(setItems(response));
    };

    fetchProductList();
  }, [dispatch, fetchProducts]);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="px-5 py-5">
        <div className="flex flex-col gap-3">
          {items &&
            items.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
