import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Map from '../Svgs/map';
import { useGlobalContext } from '../context';

export function Maps() {
  const { position, cityName, showcity, setShowcity } = useGlobalContext();
  const container = useRef(null);
  const ref = useRef(null);
  const hideSubMenu = (event) => {
    if (!ref.current.contains(event.traget)) {
      setShowcity(false);
    }
  };

  useEffect(() => {
    const menu = container.current;
    const { center, top } = position;
    menu.style.left = `${center}px`;
    menu.style.top = `${top}px`;
  }, [position]);
  return (
    <section ref={ref} onMouseLeave={hideSubMenu} className="map">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        ref={container}
        className={showcity ? 'city-name-show' : 'city-name'}
      >
        {cityName}
      </motion.div>
      <Map className="map" />
    </section>
  );
}
