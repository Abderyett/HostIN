import React, { useState } from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { IoCloudDone } from 'react-icons/io5';
import { GiServerRack } from 'react-icons/gi';

export function Stats() {
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

  return (
    <section className="stats-container">
      <button type="button" onClick={() => timer(99, 15, setUptime)}>
        clcik
      </button>
      <div className="stats-wrapper">
        <span>
          <AiOutlineHistory className="stats-icon" />
        </span>
        <div className="stats-text">
          <h3>{uptime}%</h3>
          <p>Uptime</p>
        </div>
      </div>
      <button type="button" onClick={() => timer(256, 10, setCustomers)}>
        clcik
      </button>
      <div className="stats-wrapper">
        <span>
          <IoCloudDone className="stats-icon" />
        </span>
        <div className="stats-text">
          <h3>+{customers}K</h3>
          <p>Customers</p>
        </div>
      </div>
      <button type="button" onClick={() => timer(30, 50, setLocationNumber)}>
        clcik
      </button>
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
