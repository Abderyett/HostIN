import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context';

function Submenu() {
  const { isSubmenu } = useGlobalContext();
  return <aside className={`${isSubmenu ? 'submenu show' : 'submenu'}`}>submenu</aside>;
}

export default Submenu;
