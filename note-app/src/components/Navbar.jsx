import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "All Notes", path: "/" },
  { name: "New Note", path: "/new" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg rounded-b-3xl mb-6">
      <div className="text-2xl font-extrabold text-white tracking-widest drop-shadow-lg">
        NoteNest
      </div>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`text-lg font-semibold transition-colors px-3 py-1 rounded-xl hover:bg-white/20 hover:text-white/90 ${
                location.pathname === item.path
                  ? "bg-white/20 text-white/90"
                  : "text-white/70"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
