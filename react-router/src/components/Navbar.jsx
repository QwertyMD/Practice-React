import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-blue-200 px-4 py-2">
      <ul className="flex gap-5 justify-center">
        <NavLink to="/" className={(e) => e.isActive && "text-red-500"}>
          <li className="cursor-pointer">Home</li>
        </NavLink>
        <NavLink to="/about" className={(e) => e.isActive && "text-red-500"}>
          <li className="cursor-pointer">About</li>
        </NavLink>
        <NavLink to="/contact" className={(e) => e.isActive && "text-red-500"}>
          <li className="cursor-pointer">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
