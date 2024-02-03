import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="max-w-container mx-auto px-4">
      {cartItems.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] grid grid-flow-col items-center text-primeColor px-10 text-lg font-titleFont font-semibold">
            <div className="space-x-10">
              <h2 className="">Product</h2>
            </div>

            <div className="flex items-center justify-end space-x-28">
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Sub Total</h2>
            </div>
          </div>
          <div className="mt-5">
            {cartItems.map((item) => (
              <div key={item.id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="flex items-center justify-end border py-4 px-4 ">
            <div className="flex items-center gap-3">
              <input
                className="w-44 h-9 px-4 border text-primeColor text-sm outline-none border-gray-400"
                type="text"
                placeholder="Coupon Number"
              />
              <button
                onClick={() => dispatch(clearCart())}
                className="text-sm font-semibold text-black hover:bg-black hover:text-white duration-100 py-2 px-2 border border-black"
              >
                Apply Coupon
              </button>
            </div>
          </div>

          <div className=" gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>

              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    $ {Number(10 + 20).toFixed(2)}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    $ {Number(8 + 9).toFixed(2)}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Coupon Discount
                  <span className="font-semibold tracking-wide font-titleFont">
                    - $ {Number(3 + 2).toFixed(2)}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-bold">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    $ {Number(47 - 5).toFixed(2)}
                  </span>
                </p>
              </div>

              <div className="flex justify-end">
                <Link to="/paymentgateway">
                  <button className="w-52 h-10 bg-primeColor font-semibold text-black hover:bg-black hover:text-white duration-100 border border-black">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="max-w-full p-4 py-10 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <img
              className="w-40 rounded-lg p-4 mx-auto bg-black"
              src="src/assets/cart.svg"
              alt="Empty Cart"
            />

            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart is Empty!
            </h1>

            <Link to="/shop">
              <button className="bg-blue-500 rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
