import React, { useContext } from "react";
import "./Navbar.css";
import Logo from "../../assets/frontend_assets/logo.png";
import Searchicon from "../../assets/frontend_assets/search_icon.png";
import Basketicon from "../../assets/frontend_assets/basket_icon.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const { token, updateToken, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    updateToken("");
    navigate("/");
  };

  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <Link to="/">
            <li
              onClick={() => setmenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </li>
          </Link>
          <Link to="/menu">
            <li
              onClick={() => setmenu("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </li>
          </Link>
          <Link to="/mobile-app">
            <li
              onClick={() => setmenu("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              Mobile-app
            </li>
          </Link>
          <Link to="/contact-us">
            <li
              onClick={() => setmenu("contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              Contact Us
            </li>
          </Link>
        </ul>
        <div className="navbar-right">
          <img src={Searchicon} alt="search" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={Basketicon} alt="Basket" />
            </Link>
            <div className={getTotalCartAmount() ? "" : "dot"}></div>
            <div className="dot"></div>
          </div>
          {!token ? (
            <Link to="/sign-in">
              <button>Sign In</button>
            </Link>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate('/myorders')}>
                  <img src={assets.bag_icon} alt=" " />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={Logout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;