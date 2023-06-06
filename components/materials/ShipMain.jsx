import Image from "next/image";
import React from "react";

const ShipMain = () => {
  return (
    <Image
      // data-aos="fade-up"
      // data-aos-duration="500"
      // data-aos-anchor-placement="center-bottom"
      priority="true"
      alt="Ships"
      id="main-ship"
      className="ship-specs-main"
      src="/assets/images/station-1.webp"
      width={3620}
      height={1969}
    />
  );
};

export default ShipMain;
