"use client"
import Image from "next/image";
import React from "react";

const ShikokuCard= () => {
    const handleClickShikoku = () => {
        currentSlideleads(3);
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = '/assets/styles/shikoku.css';
        document.head.appendChild(styleLink);
        toGate();
    };

         return (  <div
              onClick={handleClickShikoku}
              className="leads-buttons banner banner-for-admin-sh shikoku-color"
            >
              <span>
                <Image
                alt="Shikoku"
                  className="leads-photo-abs"
                  src="/assets/images/shikoku.gif"
                  width={128}
                  height={128}
                />
              </span>
              <Image alt="Shikoku" className="loader-icon-23" src="/assets/images/shikoku-land.png"           width={357}
          height={649}/>
              <p className="admin-name"> Shikoku </p>
            </div>
    
    );

         };
      
    export default ShikokuCard;