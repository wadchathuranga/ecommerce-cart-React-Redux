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
    <div className="w-full grid grid-flow-col mb-4 px-10 py-3 border">
      <div className="flex items-center space-x-10">
        <ImCross
          onClick={() => dispatch(deleteItem(item.id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.title}</h1>
      </div>

      <div className="flex items-center justify-end space-x-28">
        <div>$ {Number(item.price).toFixed(2)}</div>

        <div className="flex space-x-3">
          <span
            onClick={() => dispatch(drecreaseQuantity(item.id))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>

        <div>
          <p>$ {Number(item.quantity * item.price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
