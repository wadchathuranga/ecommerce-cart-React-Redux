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
      <div className="col-span-1 row-span-2 flex items-center justify-evenly">
        <ImCross
          onClick={() => dispatch(deleteItem(item.id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
      </div>

      <div className="bg-green-500 row-span-2 col-span-4">
        <div className="h-full flex items-center justify-between pr-10">
          <div className="w-2/4">
            <h1 className="font-titleFont font-semibold">{item.title}</h1>
          </div>

          <div className="flex w-2/4 items-center justify-around">
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
      </div>
    </div>
  );
};

export default ItemCard;
