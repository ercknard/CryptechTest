"use client";
import Image from "next/image";
import React from "react";

const OrbitalStation = () => {
  const handleClick = () => {
    toGate();
  };

  return (
    <div onClick={handleClick} className="leads-buttons banner mod kyuhi-color">
      <span>
        <Image
          alt="Ercknard"
          className="leads-photo-abs2"
          src="/assets/images/pepe-head.webp"
          width={128}
          height={128}
        />
      </span>
      <h4> Orbital Station </h4>
    </div>
  );
};

export default OrbitalStation;
