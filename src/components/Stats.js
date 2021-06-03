import React from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { IoCloudDone } from 'react-icons/io5';
import { GiServerRack } from 'react-icons/gi';

export function Stats() {
  return (
    <section className="stats-container">
      <div className="stats-wrapper">
        <span>
          <AiOutlineHistory className="stats-icon" />
        </span>
        <div className="stats-text">
          <h3>99%</h3>
          <p>Uptime</p>
        </div>
      </div>
      <div className="stats-wrapper">
        <span>
          <IoCloudDone className="stats-icon" />
        </span>
        <div className="stats-text">
          <h3>+256K</h3>
          <p>Customers</p>
        </div>
      </div>
      <div className="stats-wrapper">
        <span>
          <GiServerRack className="stats-icon" />
        </span>
        <div className="stats-text">
          <h3>+30 </h3>
          <p>Pops location</p>
        </div>
      </div>
    </section>
  );
}
