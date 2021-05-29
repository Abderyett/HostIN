import React, { useEffect, useRef, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { useGlobalContext } from '../context';

function Submenu() {
  const { submenu, location, subMenuPage } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const menu = container.current;
    const { center, bottom } = location;
    menu.style.left = `${center}px`;
    menu.style.top = `${bottom}px`;
  }, [location]);
  console.log('submenudata', subMenuPage);
  return (
    <aside ref={container} className={`${submenu ? 'submenu show' : 'submenu'}`}>
      <h4> {subMenuPage.page}</h4>
      {subMenuPage.links.map((el) => (
        <article className="links-menu" key={el.id}>
          <div className="links">
            <a href={el.url} className="link">
              <span className="icon">{el.icon}</span>
              <span className="label">
                {el.label}&nbsp;
                <span className="hooverArrow">
                  <BsArrowRightShort className="link-arrow" />
                </span>
              </span>
            </a>
          </div>
        </article>
      ))}
    </aside>
  );
}

export default Submenu;
