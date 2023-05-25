
"use client"

import PlayVideo from "./videos/PlayVideo";

const WebTitle= () => (

    <>

    <h1 id="web_title"> Welcome to CryptechTest </h1>
    
    <svg>
        <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="100%">
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

    <PlayVideo />

    </>
    
    );
      
    export default WebTitle;