import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
function Navbar() {
  return (
    <div className="flex items-center py-5 justify-between font-medium">
      <img className="w-36" src={assets.logo} alt="" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>Home</p>
          <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/Collection">
          <p>Collection</p>
          <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/About">
          <p>About</p>
          <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/Contact">
          <p>Contact</p>
          <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
      <div>
        <img className="w-5" src={assets.cart_icon} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
