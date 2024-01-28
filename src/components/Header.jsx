import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-100">
      <div className="w-full h-20 px-10">
        <div className="flex justify-between">
          <div>
            <a href="" className="flex space-x-3">
              <img
                className="h-8 w-auto"
                src="src/assets/react.svg"
                alt="Your Company"
              />
              <span>Redux-CRUD</span>
            </a>
          </div>

          <div className="flex space-x-3">
            <Link to={"/home"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>

          <div>Sencondary Nav</div>

          {/* Mobile Nav */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
