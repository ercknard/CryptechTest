"use client";
import Image from "next/image";
import React from "react";

const KyuhiCard = () => {
  const handleClickKyuhi = () => {
    currentSlideleads(4);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/kyuhi.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  return (
    <div
      onClick={handleClickKyuhi}
      className="leads-buttons banner banner-for-admin-ky kyuhi-color"
    >
      <span>
        <Image
          alt="Kyuhi"
          className="leads-photo-abs"
          src="/assets/images/kyuhi.webp"
          width={128}
          height={128}
        />
      </span>
      <Image
        alt="Kyuhi"
        className="loader-icon-23"
        src="/assets/images/kyuhi-land.webp"
        width={357}
        height={649}
      />
      <p className="admin-name"> Kyuhi </p>
    </div>
  );
};

export default KyuhiCard;
