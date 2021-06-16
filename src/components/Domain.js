/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef } from 'react';
import { Navbar } from './Navbar';
import { Submenu } from './Submenu';
import { useGlobalContext } from '../context';

export function Domain() {
  const { setSubmenu } = useGlobalContext();
  const ref = useRef(null);
  const hideSubMenu = (event) => {
    if (!ref.current.contains(event.traget)) {
      setSubmenu(false);
    }
  };
  return (
    <div className="search-container">
      <Navbar />
      <Submenu />
      <div className="search-wrapper" ref={ref} onMouseOver={hideSubMenu}>
        <h1 className="search-heading"> Use Domain Checker to find unique domains!</h1>
        <p className="search-text">
          Type your desired domain name into domain checker search bar and find out if it's available instantly!
        </p>
        <form>
          <input className="domain-input" type="text" />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
