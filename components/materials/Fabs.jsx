"use client";
import Image from "next/image";

const Fabs = () => {
  const ClickMods = () => {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/index.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  const ClickSquid = () => {
    currentSlideleads(1);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/squid.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  const ClickSeqsee = () => {
    currentSlideleads(2);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/seqsee.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  const ClickVanikoro = () => {
    currentSlideleads(3);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/vanikoro.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  const ClickKyuhi = () => {
    currentSlideleads(4);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/kyuhi.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  const ClickShikoku = () => {
    currentSlideleads(5);
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/styles/shikoku.css";
    document.head.appendChild(styleLink);
    toGate();
  };

  return (
    <div className="floating-container">
      <div id="floating" className="floating-button">
        <Image
          alt="Fab Icon"
          className="image-selection-fab"
          src="/assets/images/wheel.png"
          width={150}
          height={150}
        />
      </div>
      <div className="element-container">
        <span onClick={ClickSquid} className=" float-element tooltip-left">
          <Image
            alt="Fab Icon"
            className="image-selection-fab"
            src="/assets/images/squid-head.webp"
            width={150}
            height={150}
          />
        </span>
        <span onClick={ClickSeqsee} className=" float-element tooltip-left">
          <Image
            alt="Fab Icon"
            className="image-selection-fab"
            src="/assets/images/pepita-head.webp"
            width={150}
            height={150}
          />
        </span>
        <span onClick={ClickVanikoro} className=" float-element tooltip-left">
          <Image
            alt="Fab Icon"
            className="image-selection-fab"
            src="/assets/images/pepe-head.webp"
            width={150}
            height={150}
          />
        </span>
        <span onClick={ClickKyuhi} className=" float-element tooltip-left">
          <Image
            alt="Fab Icon"
            className="image-selection-fab"
            src="/assets/images/kyuhi-head.webp"
            width={150}
            height={150}
          />
        </span>
        <span onClick={ClickShikoku} className=" float-element tooltip-left">
          <Image
            alt="Fab Icon"
            className="image-selection-fab"
            src="/assets/images/naen-head.webp"
            width={150}
            height={150}
          />
        </span>
        {/* <span
      onClick={ClickMods}
      className=" float-element tooltip-left"
    >
      <Image
      alt="Fab Icon"
      className="image-selection-fab" 
      src="/assets/images/pack.webp"
      width={150}
      height={150} />
    </span> */}
      </div>
    </div>
  );
};

export default Fabs;
