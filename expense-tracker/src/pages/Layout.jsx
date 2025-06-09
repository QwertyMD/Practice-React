import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => (
  <div className="min-h-screen bg-neutral-950">
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 flex gap-4 shadow-lg animate-fade-in-down">
      <Link
        to="/"
        className="hover:underline px-3 py-1 rounded transition-all duration-200 hover:bg-blue-800 focus:bg-blue-800 focus:outline-none"
      >
        Home
      </Link>
      <Link
        to="/summary"
        className="hover:underline px-3 py-1 rounded transition-all duration-200 hover:bg-blue-800 focus:bg-blue-800 focus:outline-none"
      >
        Summary
      </Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
