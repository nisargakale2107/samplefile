import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container ">
        <div className="website-name">Website Name</div>
        <div className="other">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#aboutus">About us</a>
            </li>

            <li>
              <button>Become Artist</button>
            </li>

            <li>
              <button>Profile</button>
            </li>

            <li> 
              Conect Wallet
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
