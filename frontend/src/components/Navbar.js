import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import ArtistForm from "./formartist";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isArtistFormOpen, setIsArtistFormOpen] = useState(false);

  const openArtistForm = () => {
    if (!isArtistFormOpen) {
      setIsArtistFormOpen(true);
    }
  };

  const closeArtistForm = () => {
    setIsArtistFormOpen(false);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="website-name">CRYPTO MELODIES</div>
          <div className="other">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutus">About us</a>
              </li>

              <li>
                <NavLink to="/Profile">Profile</NavLink>
              </li>

              <li>Connect Wallet</li>

              <li>
                <button className="artist-btn" onClick={openArtistForm}>
                  Become Artist
                </button>
              </li>
            </ul>
          </div>
        </div>
        {isArtistFormOpen && (
          <div className="artist-form-popup">
            <div className="close-icon" onClick={closeArtistForm}>
              <IoCloseCircle />
            </div>
            <ArtistForm onClose={closeArtistForm} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
