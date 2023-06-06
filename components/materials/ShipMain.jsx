import Image from "next/image";
import React from "react";

const ShipMain = () => {
  return (
    <Image
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-anchor-placement="center-bottom"
      priority="true"
      alt="Ships"
      id="main-ship"
      className="ship-specs-main"
      src="/assets/images/station-12.webp"
      width={3620}
      height={1219}
    />
  );
};

export default ShipMain;
