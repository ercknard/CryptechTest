"use client";
import Image from "next/image";
import React from "react";

const StickCard = () => {
  const handleClickStick = () => {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/index.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  return (
    <div
      onClick={handleClickStick}
      className="leads-buttons banner mod squid-color"
    >
      <span>
        <Image
          alt="Stick"
          className="leads-photo-abs2"
          src="/assets/images/pepe-head.webp"
          width={128}
          height={128}
        />
      </span>
      <h4> ANormalStick </h4>
    </div>
  );
};

export default StickCard;
