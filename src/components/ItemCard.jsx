import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../store/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-rows-2 grid-flow-col mb-4 py-3 border">
      <div className="row-span-2 flex items-center justify-evenly">
        <ImCross
          onClick={() => dispatch(deleteItem(item.id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
      </div>

      <div className="bg-green-500 row-span-2 col-span-6">
        <div className="bg-slate-400 h-2/4 flex items-center pl-5">
          <h1 className="font-titleFont font-semibold">{item.title}</h1>
        </div>

        <div className="bg-yellow-400 h-2/4 flex items-center justify-around">
          <div className="bg-red-500">1</div>
          <div className="bg-red-400">2</div>
          <div className="bg-red-300">3</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
