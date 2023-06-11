"use client";

import Tutorial from "./play/Tutorial";
import PlayVideo from "./videos/PlayVideo";

const WebTitle = () => (
  <>
    <PlayVideo />
    <div className="to-flex-web">
      <h1 id="web_title"> Welcome to CryptechTest </h1>

      <svg>
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="40%">
            CRYPTECHTEST SMP SERVER
          </text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
        </g>
      </svg>
      <Tutorial />
    </div>
  </>
);

export default WebTitle;
