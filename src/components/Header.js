import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userSignin);

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
        {userInfo && <NavLink to="/profile">{userInfo.name}</NavLink>}

        {!userInfo && <NavLink to="/signin">Sign In</NavLink>}

        {userInfo && userInfo.isAdmin && (
          <div className="dropdown">
            <NavLink to="#">Admin</NavLink>
            <ul className="dropdown-content">
              <li>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/products">Products</NavLink>
              </li>
            </ul>
          </div>
        )}

        {userInfo && (
          <NavLink to="/signin" onClick={() => dispatch(logout())}>
            Sign Out
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
