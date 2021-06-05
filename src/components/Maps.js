import React, { useEffect, useRef } from 'react';
import Map from '../Svgs/map';
import { useGlobalContext } from '../context';

export function Maps() {
  const { position, cityName, showcity } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const menu = container.current;
    const { center, bottom } = position;
    menu.style.left = `${center}px`;
    menu.style.top = `${bottom}px`;
  }, [position]);
  return (
    <section className="map">
      <div ref={container} className={showcity ? 'city-name-show' : 'city-name'}>
        {cityName}
      </div>
      <Map className="map" />
    </section>
  );
}
