import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  return (
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>&#9776;</button>
        <NavLink to="/">amazona</NavLink>
      </div>
      <div className="header-links">
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </div>
    </header>
  );
};

export default Header;
