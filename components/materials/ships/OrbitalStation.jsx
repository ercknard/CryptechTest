"use client";
import Image from "next/image";
import React from "react";

const OrbitalStation = () => {
  const handleClick = () => {
    currentSlideleads(2);
  };

  return (
    <div
      onClick={handleClick}
      className="leads-buttons banner banner-for-admin-se seqsee-color"
    >
      <span>
        <Image
          alt="Mug"
          className="leads-photo-abs"
          src="/assets/images/mug.png"
          width={128}
          height={128}
        />
      </span>
      <Image
        alt="Ship"
        className="loader-icon-23"
        src="/assets/images/ship-2.webp"
        width={1024}
        height={1024}
      />
      <p className="admin-name"> Orbital Station </p>
    </div>
  );
};

export default OrbitalStation;
