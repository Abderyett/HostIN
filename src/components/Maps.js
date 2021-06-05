import React, { useEffect, useRef } from 'react';
import Map from '../Svgs/map';
import { useGlobalContext } from '../context';

export function Maps() {
  const { setPosition, position, cityName } = useGlobalContext();
  const container = useRef(null);
  console.log(position);

  useEffect(() => {
    const menu = container.current;
    const { center, bottom } = position;
    menu.style.left = `${center}px`;
    menu.style.top = `${bottom}px`;
  }, [position]);
  return (
    <section className="map">
      <div ref={container} className="city-name">
        {cityName}
      </div>
      <Map className="map" />
    </section>
  );
}
