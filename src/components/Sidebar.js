import React from 'react';
import ReactDOM from 'react-dom';
import { BsX, BsArrowRightShort } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from '../context';
import data from '../data';

export function Sidebar() {
  const { showNav, setShowNav } = useGlobalContext();
  return ReactDOM.createPortal(
    <aside className="Sidebar">
      <div className={showNav ? 'sidebar-warpper show' : 'sidebar-warpper'}>
        <aside className="modal-container">
          <button type="button" className="close-btn" onClick={() => setShowNav(false)}>
            <BsX />
          </button>
          <div className="menu-body">
            <section className="nav-list">
              {data.map((el) => (
                <article className="links-container" key={el.id}>
                  <h1> {el.page}</h1>
                  <div className="links">
                    {el.links.map((link) => (
                      <a href={link.url} key={uuidv4()} className="link">
                        <span className="icon">{link.icon}</span>
                        <span className="label">
                          {link.label}&nbsp;
                          <span className="hooverArrow">
                            <BsArrowRightShort className="link-arrow" />
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </article>
              ))}
              <article className="btn-container">
                <a href="/" className="sign">
                  Sign in&nbsp; <BsArrowRightShort className="arrow" />
                </a>
              </article>
            </section>
          </div>
        </aside>
      </div>
    </aside>,
    document.querySelector('#modal')
  );
}

export default Sidebar;
