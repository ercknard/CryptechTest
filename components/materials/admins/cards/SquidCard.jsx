"use client"
import Image from "next/image";
import React from "react";

const SquidCard= () => {
    const handleClickSquid = () => {
        currentSlideleads(1);
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = '/assets/styles/squid.css';
        document.head.appendChild(styleLink);
        toGate();
    };

         return (  <div
              onClick={handleClickSquid}
              className="leads-buttons banner banner-for-admin-sq squid-color"
            >
              <span>
                <Image
                alt="Squid"
                  className="leads-photo-abs"
                  src="/assets/images/squid.gif"
                  width={128}
                  height={128}
                />
              </span>
              <Image alt="Squid" className="loader-icon-23" src="/assets/images/squid-land.png"           width={357}
          height={649}/>
              <p className="admin-name"> Squidicuz </p>
            </div>
    
    );

         };
      
    export default SquidCard;