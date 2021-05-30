import React, { useEffect, useRef } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { useGlobalContext } from '../context';

export function Submenu() {
  const { submenu, location, subMenuPage } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const menu = container.current;
    const { center, bottom } = location;
    menu.style.left = `${center}px`;
    menu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside ref={container} className={`${submenu ? 'submenu show' : 'submenu'}`}>
      <h4> {subMenuPage.page}</h4>
      <article className="links-menu">
        {subMenuPage.links.map((el, index) => (
          <div className="menu-items" key={index}>
            <a href={el.url} className="link-submenu">
              <span className="icon-submenu">{el.icon}</span>
              <span className="label-submenu">
                {el.label}&nbsp;
                <span className="hooverArrow">
                  <BsArrowRightShort className="link-arrow" />
                </span>
              </span>
            </a>
          </div>
        ))}
      </article>
    </aside>
  );
}
