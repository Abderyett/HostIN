/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';
import { Submenu } from './Submenu';
import { useGlobalContext } from '../context';

export function Domain() {
  const { setSubmenu, searchTerm, setSearchTerm, tld, setTld } = useGlobalContext();
  const ref = useRef(null);

  const hideSubMenu = (event) => {
    if (!ref.current.contains(event.traget)) {
      setSubmenu(false);
    }
  };

  const fetching = async () => {
    const res = await axios.get(
      `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${process.env.REACT_APP_DOMAIN_KEY}&domainName=${searchTerm}${tld}&credits=DA`
    );

    console.log(res.data);
  };
  const getDomainName = (e) => {
    setTld(e.target.dataset.tld);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    fetching();
    setSearchTerm('');
    setTld('.com');
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // useEffect(() => {

  // }, []);
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
          <input className="domain-input" type="text" value={searchTerm} onChange={handleChange} />
          <button className="search-btn" type="submit" onClick={handlSubmit}>
            Search
          </button>
          <div className="domain-suggestion">
            <div onClick={getDomainName} onKeyDown={getDomainName} className=" domain domain-com">
              <h3 data-tld=".com">.com</h3>
              <h4 data-tld=".com">$8.99</h4>
            </div>

            <div onClick={getDomainName} onKeyDown={getDomainName} className=" domain domain-online">
              <h3 data-tld=".online">.online</h3>
              <h4 data-tld=".online">$0.99</h4>
            </div>

            <div onClick={getDomainName} onKeyDown={getDomainName} className=" domain domain-xyz">
              <h3 data-tld=".xyz">.xyz</h3>
              <h4 data-tld=".xyz">$0.99</h4>
            </div>

            <div onClick={getDomainName} onKeyDown={getDomainName} className=" domain domain-link">
              <h3 data-tld=".link">.link</h3>
              <h4 data-tld=".link">$1.99</h4>
            </div>

            <div onClick={getDomainName} onKeyDown={getDomainName} className=" domain domain-live">
              <h3 data-tld=".live">.live</h3>
              <h4 data-tld=".live">$3.50</h4>
            </div>

            <div onClick={getDomainName} onKeyDown={getDomainName} className=" domain domain-digital">
              <h3 data-tld=".digital">.digital</h3>
              <h4 data-tld=".digital">$3.49</h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
