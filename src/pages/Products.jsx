import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import { useFetchProductsMutation } from "../store/api/productsApiSlice";
import { setItems } from "../store/productsSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);

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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {items &&
            items.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
