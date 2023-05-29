"use client";
import Image from "next/image";
import React from "react";

const MatadorCard = () => {
  const handleClickMatador = () => {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/index.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  return (
    <div
      onClick={handleClickMatador}
      className="leads-buttons banner mod vanikoro-color"
    >
      <span>
        <Image
          alt="Matador"
          className="leads-photo-abs2"
          src="/assets/images/pepe-head.webp"
          width={128}
          height={128}
        />
      </span>
      <h4> Matador </h4>
    </div>
  );
};

export default MatadorCard;
