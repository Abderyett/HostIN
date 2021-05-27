import React from 'react';
import ReactDOM from 'react-dom';
import { BsX } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from '../context';
import data from '../data';

function Sidebar() {
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
                        <span className="label">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          </div>
        </aside>
      </div>
    </aside>,

    document.querySelector('#modal')
  );
}

export default Sidebar;
