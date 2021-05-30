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
      <img scr={gtt} alt="gtt" />
      <img scr={bt} alt="bt" />
      <img scr={equinix} alt="equinix" />
      <img scr={interxion} alt="interxion" />
      <img scr={level3} alt="level3" />
      <img scr={telia} alt="telia" />
    </div>
  );
}
