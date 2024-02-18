import "../styles/Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
// import logo from "../assets/images/signature-logo.svg";

function Navbar() {
  let [menuState, setMenuState] = useState(false);
  let [rotation, setRotation] = useState(0);

  const showMenu = () => {
    window.innerWidth <= 650 ? setMenuState(false) : setMenuState(true);
  };
  const closeMenu = () => {
    if (window.innerWidth <= 650) setMenuState(false);
  };
  const handleClick = () => {
    setMenuState(!menuState);
    rotation === 0 ? setRotation(180) : setRotation(0);
  };

  useEffect(() => {
    showMenu();
  }, []);

  window.addEventListener("resize", showMenu);

  return (
    <nav>
      <Link to={"/"} className="homeButton">
        MovieVerse
      </Link>
      <motion.button
        className="toggleButton"
        onClick={handleClick}
        animate={{ rotate: rotation }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 50 50"
        >
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>
      </motion.button>
      <AnimatePresence>
        {menuState && (
          <motion.ul
            className="navlinks"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween" }}
            exit={{ y: -25, opacity: 0 }}
          >
            <NavLink to="/" onClick={closeMenu}>
              <li className="navlink">Home</li>
            </NavLink>
            <NavLink to="/movies" onClick={closeMenu}>
              <li className="navlink">Movies</li>
            </NavLink>
            <NavLink to="/tv-shows" onClick={closeMenu}>
              <li className="navlink">TV shows</li>
            </NavLink>
            <NavLink to="/watchlist" onClick={closeMenu}>
              <li className="navlink">Watchlist</li>
            </NavLink>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
