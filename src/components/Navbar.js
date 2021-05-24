import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import logo from '../Svgs/logo.svg';

function Navbar() {
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
      </div>
    </header>
  );
}

export default Navbar;
