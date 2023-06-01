"use client";
import Image from "next/image";
import React from "react";

const SuperCruiser = () => {
  const handleClick = () => {
    currentSlideships(6);
  };

  return (
    <div onClick={handleClick} className="ships-buttons banner mod ship-color">
      <span>
        <Image
          alt="Ercknard"
          className="ship-icons squid"
          src="/assets/images/ship-4.webp"
          width={128}
          height={128}
        />
      </span>
      <h4> 6. Super Cruiser </h4>
    </div>
  );
};

export default SuperCruiser;
