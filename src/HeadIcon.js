import React from "react";
import footerImage from './svg-images/footerImage.svg';
import "./Animation.css";

function HeadIconAnimate(props) {
  return (
    <div>
      <svg width="100%" height="100%" viewBox="0 0 102 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="footerImage">
          <path id="head" fillRule="evenodd" clipRule="evenodd" d="M96.3354 62.9473C93.3078 55.2259 90.3734 47.7419 91.5043 42.1567C95.4732 22.5556 76.3961 -1.90859 50.2991 0.118108C24.2021 2.14481 4.63119 23.9187 6.58623 48.7515C7.0726 54.9292 5.08059 61.5831 3.16281 67.989C-2.62837 87.3332 -7.74278 104.417 58.1077 99.3028C112.117 103.196 103.933 82.3241 96.3354 62.9473ZM23.5043 41.0749L75.3798 41.1147C76.6224 41.1156 77.7442 41.8801 78.1442 43.0571C85.1466 63.6658 83.064 97.7107 49.6213 96.1607C16.662 94.6331 18.4846 63.1251 20.5295 43.7347C20.6899 42.2138 21.9747 41.0738 23.5043 41.0749Z" fill="#3D405B" />
          <path id="open-mouth" d="M61.5 79.2804C60 79.6971 44.5001 79.2804 44.5001 79.2804C37.0001 78.1939 46.0002 90.2803 52.5002 90.2803C59.0002 90.2803 68.1927 77.421 61.5 79.2804Z" stroke="#3D405B" strokeWidth="5" strokeLinecap="round" />
          <path id="smile-mouth" d="M63.5 79.2804C63.5 90 46 96.5001 41.5 79.2804" stroke="#3D405B" strokeWidth="5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}

export default HeadIconAnimate;