import React from 'react';
import com from '../Svgs/com.svg';
import online from '../Svgs/online.svg';
import xyz from '../Svgs/xyz.svg';
import link from '../Svgs/link.svg';
import live from '../Svgs/live.svg';
import digital from '../Svgs/digital.svg';

export function DomainList() {
  return (
    <div className="partners-container">
      <img src={com} alt="com" />
      <img src={online} alt="online" />
      <img src={xyz} alt="xyz" />
      <img className="svgLink" src={link} alt="link" />
      <img className="live" src={live} alt="live" />
      <img className="digital" src={digital} alt="digital" />
    </div>
  );
}
