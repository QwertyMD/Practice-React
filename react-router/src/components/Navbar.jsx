import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-blue-200 px-4 py-2">
      <ul className="flex gap-5 justify-center">
        <Link to="/">
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer">About</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
