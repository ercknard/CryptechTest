"use client";
import Image from "next/image";
import React from "react";

const DemilCard = () => {
  const handleClickDemil = () => {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/index.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  return (
    <div
      onClick={handleClickDemil}
      className="leads-buttons banner mod kyuhi-color"
    >
      <span>
        <Image
          alt="Demil"
          className="leads-photo-abs2"
          src="/assets/images/pepe-head.webp"
          width={128}
          height={128}
        />
      </span>
      <h4> Demil </h4>
    </div>
  );
};

export default DemilCard;
