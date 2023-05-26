"use client"
import Image from "next/image";
import React from 'react';


const Ferbog05Card = () => {
    const handleClickFerbog05 = () => {
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = '/assets/styles/index.css';
        document.head.appendChild(styleLink);
        toGate();
    };

         return (  <div
              onClick={handleClickFerbog05}
              className="leads-buttons banner mod seqsee-color"
            >
              <span>
                <Image
                alt="Ferbog05"
                  className="leads-photo-abs2"
                  src="/assets/images/pepe-head.webp"
                  width={128}
                  height={128}
                />
              </span>
              <h4> Ferbog05 </h4>
            </div>
         )
   }  
      
    export default Ferbog05Card;