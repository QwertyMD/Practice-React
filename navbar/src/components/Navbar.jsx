import React, { useState } from "react";
import List from "./List";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="flex justify-between mx-10 py-5 items-center">
        <img
          className="hover:drop-shadow-[0_0_5px_purple] transition-all duration-250"
          src="vite.svg"
          alt="logo"
        />
        <ul className="sm:flex gap-5 hidden">
          <List content="Home" />
          <List content="About" />
          <List content="Contact" />
          <List content="Support" />
          <List content="FAQ" />
        </ul>
        <RxHamburgerMenu
          onClick={() => setMobile(!mobile)}
          className="text-2xl cursor-pointer sm:hidden"
        />
      </nav>
      {mobile && (
        <div className="nav-mobile">
          <ul className="text-center grid gap-3 pb-3">
            <List content="Home" />
            <List content="About" />
            <List content="Contact" />
            <List content="Support" />
            <List content="FAQ" />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
