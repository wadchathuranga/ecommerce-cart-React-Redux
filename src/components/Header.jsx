import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-700 text-white">
      <div className="w-full h-14 px-10 flex justify-between items-center ">
        <Link to={"/"}>
          <div className="flex space-x-3 items-center py-3 px-3">
            <img
              className="h-8 w-auto"
              src="src/assets/react.svg"
              alt="Your Company"
            />
            <span className="font-bold">Redux-Cart</span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-3 font-semibold">
          <Link to={"/home"}>
            <p className="hover:text-blue-500">Home</p>
          </Link>
          <Link to={"/products"}>
            <p className="hover:text-blue-500">Products</p>
          </Link>
          <Link to={"/about"}>
            <p className="hover:text-blue-500">About</p>
          </Link>
          <Link to={"/contact"}>
            <p className="hover:text-blue-500">Contact</p>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-2 font-semibold">
          <div>
            <img src="src/assets/cart.svg" className="pr-3 h-6 w-auto" />
          </div>
          <Link to={"/login"}>
            <button className="py-1 px-3 bg-blue-500 rounded hover:bg-blue-700">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="py-1 px-3 bg-yellow-500 rounded hover:bg-yellow-700">
              Signup
            </button>
          </Link>
        </div>

        {/* Mobile Nav */}
        {/* <div className="md:hidden flex items-center">
          <button>
            <img src="src/assets/menu.svg" className="h-6 w-auto" />
          </button>
        </div> */}
      </div>

      {/* <div className="py-3 px-3 space-y-2">
        <a className="block">Home</a>
        <a className="block">Products</a>
      </div> */}
    </nav>
  );
};

export default Header;
