"use client"
import Image from "next/image";
import React from "react";

const Game= () => (

    <>

    <div
      onClick = {() => currentSlidefeeds(1)}
      className="banner mod push-color feed-buttons"
    >
              <Image alt="Squid" className="loader-icon-23" src="/assets/images/squid-land.png"           width={357}
          height={649}/>
      <h4> Game </h4>
    </div>

    </>
    
    );
      
    export default Game;