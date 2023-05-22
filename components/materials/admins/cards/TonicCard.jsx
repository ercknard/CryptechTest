"use client"
import Image from "next/image";
import React from 'react';


const TonicCard = () => {
    const handleClickTonic = () => {
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = '/assets/styles/index.css';
        document.head.appendChild(styleLink);
        toGate();
    };

         return (  <div
              onClick={handleClickTonic}
              className="leads-buttons banner mod shikoku-color"
            >
              <span>
                <Image
                alt="Tonic"
                  className="leads-photo-abs2"
                  src="/assets/images/pepe-head.png"
                  width={128}
                  height={128}
                />
              </span>
              <h4> ANormalTonic </h4>
            </div>
         )
   }  
      
    export default TonicCard;