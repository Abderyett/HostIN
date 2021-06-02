import React from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { IoCloudDone } from 'react-icons/io5';
import { GiServerRack } from 'react-icons/gi';

export function Stats() {
  return (
    <section className="stats-container">
      <div>
        <span>
          <AiOutlineHistory />
          &nbsp;99%
        </span>
        Uptime
      </div>
      <div>
        <span>
          <IoCloudDone />
          &nbsp;+256K
        </span>
        Customers
      </div>
      <div>
        <span>
          <GiServerRack />
          +30
        </span>
        Pops location
      </div>
    </section>
  );
}
