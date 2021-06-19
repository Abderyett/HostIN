import * as React from 'react';

export function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
      width="68px"
      height="68px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path d="M10 50A40 40 0 0 0 90 50A40 44.8 0 0 1 10 50" fill="#5a67d8" stroke="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 52.4;360 50 52.4"
        />
      </path>
    </svg>
  );
}
