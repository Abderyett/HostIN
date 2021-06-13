import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import logo from '../Svgs/logo.svg';
import data from '../data';

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        <h2 className="footer-logo">
          <img className="logo-image-footer" src={logo} alt="logo" /> Host-IN
        </h2>
        <p>
          Our mission is to make life easier for website developers and their customers. We do it by offering easy to
          use, fast and reliable web hosting services.
        </p>
      </div>

      <article className="links-wrapper">
        {data.map((el) => (
          <div className="footer-links" key={el.id}>
            <h3 className="footer-heading">{el.page}</h3>
            <div className="footer-sublinks">
              {el.links.map((link, index) => (
                <a href={link.url} className="link-footer link-submenu" key={index}>
                  <span className="label-submenu">
                    {link.label}&nbsp;
                    <span className="hooverArrow">
                      <BsArrowRightShort className="link-arrow" />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </article>
      <div className="separator" />
      <div className="text-copyright"> © {new Date().getFullYear()} Copyright Host-In</div>
    </footer>
  );
}
