/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';
import { Submenu } from './Submenu';
import { useGlobalContext } from '../context';

export function Domain() {
  const { setSubmenu, searchTerm } = useGlobalContext();
  const ref = useRef(null);
  const hideSubMenu = (event) => {
    if (!ref.current.contains(event.traget)) {
      setSubmenu(false);
    }
  };

  const fetching = () => {
    const res = axios.get(
      `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${process.env.REACT_APP_DOMAIN_KEY}&domainName=${searchTerm}.com&credits=DA`
    );

    console.log(res);
  };

  useEffect(() => {
    // fetching();
  }, []);
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
          <div className="domain-suggestion">
            <div className=" domain domain-com">
              <h4>.com</h4>
              <h4>$8.99</h4>
            </div>
            <div className=" domain domain-online">
              <h4>.online</h4>
              <h4>$0.99</h4>
            </div>
            <div className=" domain domain-xyz">
              <h4>.xyz</h4>
              <h4>$0.99</h4>
            </div>
            <div className=" domain domain-link">
              <h4>.link</h4>
              <h4>$1.99</h4>
            </div>
            <div className=" domain domain-live">
              <h4>.live</h4>
              <h4>$3.50</h4>
            </div>
            <div className=" domain domain-digital">
              <h4>.digital</h4>
              <h4>$3.49</h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
