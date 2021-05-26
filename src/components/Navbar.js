import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Svgs/logo.svg';

import { useGlobalContext } from '../context';

function Navbar() {
  const { setShowNav } = useGlobalContext();
  return (
    <header className="nav-container">
      <div className="wrapper">
        <h2 className="logo">
          <img className="logo-image" src={logo} alt="logo" /> Host-IN
        </h2>
        <ul className="nav-links">
          <li>Hosting</li>
          <li>Domain</li>
          <li>Solution</li>
          <li>Support</li>
        </ul>
        <a href="/" className="sign-in">
          <span>
            Sign in <BsArrowRightShort className="arrow-icon" />
          </span>
        </a>
        <button className="toggle-btn" type="button" onClick={() => setShowNav(true)}>
          <FaBars className="hamburger-menu" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
