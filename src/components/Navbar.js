/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import logo from '../Svgs/logo.svg';
import { useGlobalContext } from '../context';

function Navbar() {
  const { setShowNav, showSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const text = e.target.textContent;
    const btnCoordinate = e.target.getBoundingClientRect();
    const center = (btnCoordinate.right + btnCoordinate.left) / 2;
    const bottom = btnCoordinate.bottom + 15;

    showSubMenu(text, { center, bottom });
  };

  return (
    <header className="nav-container">
      <nav className="nav" />

      <div className="wrapper">
        <h2 className="logo">
          <img className="logo-image" src={logo} alt="logo" /> Host-IN
        </h2>
        <ul className="nav-links">
          <li onMouseOver={displaySubMenu}>Hosting</li>
          <li onMouseOver={displaySubMenu}>Solution</li>
          <li onMouseOver={displaySubMenu}>Company</li>
          <li>Domain</li>
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
