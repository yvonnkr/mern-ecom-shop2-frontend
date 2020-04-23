import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>
        x
      </button>
      <ul className="categories">
        <li>
          <Link to="/category/Pants">Pants</Link>
        </li>
        <li>
          <Link to="/category/Shirts">Shirts</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
