import React, { useState, useEffect } from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { IoCloudDone } from 'react-icons/io5';
import { GiServerRack } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';

export function Stats() {
  const { ref, inView } = useInView({ threshhold: 0.3 });

  const [uptime, setUptime] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [locationNumber, setLocationNumber] = useState(0);

  function timer(number, interval, state) {
    setInterval(() => {
      state((prevState) => {
        if (prevState < number) {
          return prevState + 1;
        }
        return number;
      });
    }, interval);
  }
  useEffect(() => {
    if (inView) {
      timer(99, 30, setUptime);
      timer(256, 10, setCustomers);
      timer(30, 95, setLocationNumber);
    }
  }, [inView]);
  return (
    <section className="stats-container">
      <div className="stats-wrapper" ref={ref}>
        <span>
          <AiOutlineHistory className="stats-icon" />
        </span>
        <div className="stats-text">
          <h3>{uptime}%</h3>
          <p>Uptime</p>
        </div>
      </div>

      <div className="stats-wrapper">
        <span>
          <IoCloudDone className="stats-icon" />
        </span>
        <div className="stats-text">
          <h3>+{customers}K</h3>
          <p>Customers</p>
        </div>
      </div>

      <div className="stats-wrapper">
        <span>
          <GiServerRack className="stats-icon" />
        </span>
        <div className="stats-text">
          <h3>+{locationNumber} </h3>
          <p>Pops location</p>
        </div>
      </div>
    </section>
  );
}
