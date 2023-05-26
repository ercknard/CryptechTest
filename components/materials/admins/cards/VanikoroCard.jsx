"use client"
import Image from "next/image";
import React from "react";

const VanikoroCard= () => {
    const handleClickVanikoro = () => {
        currentSlideleads(3);
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = '/assets/styles/vanikoro.css';
        document.head.appendChild(styleLink);
        toGate();
    };

         return (  <div
              onClick={handleClickVanikoro}
              className="leads-buttons banner banner-for-admin-va vanikoro-color"
            >
              <span>
                <Image
                alt="Vanikoro"
                  className="leads-photo-abs"
                  src="/assets/images/vanikoro.webp"
                  width={128}
                  height={128}
                />
              </span>
              <Image alt="Vanikoro" className="loader-icon-23" src="/assets/images/pepe-land.webp"           width={357}
          height={649}/>
              <p className="admin-name"> Vanikoro </p>
            </div>

    );

         };
      
    export default VanikoroCard;