import React from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  

  return (
    <>
      <nav className="nav-container ">
        <div className="website-name">TuneTrax</div>
        <div className="other">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/">About us</NavLink>
            </li>

            <li>
              <button>Become Artist</button>
            </li>

            <li>
              <NavLink to="/Profile">Profile</NavLink>
            </li>

            <li>Conect Wallet</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
