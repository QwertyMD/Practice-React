import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 z-50">
      <div className="text-2xl font-extrabold text-blue-700 tracking-tight drop-shadow">
        MyApp
      </div>
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/page1"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600 transition"
          }
        >
          Page 1
        </NavLink>
        <NavLink
          to="/page2"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600 transition"
          }
        >
          Page 2
        </NavLink>
        <NavLink
          to="/page3"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600 transition"
          }
        >
          Page 3
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
