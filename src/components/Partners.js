import React from 'react';
import gtt from '../Svgs/gtt.svg';
import bt from '../Svgs/bt.svg';
import equinix from '../Svgs/equinix.svg';
import interxion from '../Svgs/interxion.svg';
import level3 from '../Svgs/level3.svg';
import telia from '../Svgs/telia.svg';

export function Partners() {
  return (
    <div className="partners-container">
      <img src={gtt} alt="gtt" />
      <img src={bt} alt="bt" />
      <img src={equinix} alt="equinix" />
      <img src={interxion} alt="interxion" />
      <img src={level3} alt="level3" />
      <img src={telia} alt="telia" />
    </div>
  );
}
