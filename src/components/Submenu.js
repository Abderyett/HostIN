import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context';

function Submenu() {
  const { submenu, location } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const menu = container.current;
    const { center, bottom } = location;
    menu.style.left = `${center}px`;
    menu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside ref={container} className={`${submenu ? 'submenu show' : 'submenu'}`}>
      submenu
    </aside>
  );
}

export default Submenu;
