"use client";
import Image from "next/image";
import React from "react";

const SeqseeCard = () => {
  const handleClickSeqsee = () => {
    currentSlideleads(2);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/seqsee.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  return (
    <div
      onClick={handleClickSeqsee}
      className="leads-buttons banner banner-for-admin-se seqsee-color"
    >
      <span>
        <Image
          alt="Seqsee"
          className="leads-photo-abs"
          src="/assets/images/seqsee.gif"
          width={128}
          height={128}
        />
      </span>
      <Image
        alt="Seqsee"
        className="loader-icon-23"
        src="/assets/images/pepita-land.webp"
        width={357}
        height={649}
      />
      <p className="admin-name"> Seqsee </p>
    </div>
  );
};

export default SeqseeCard;
