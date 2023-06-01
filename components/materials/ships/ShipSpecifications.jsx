"use client";
import Comets from "@components/materials/Comets";
import Image from "next/image";

const ShipSpecification = () => (
  <div className="slideshow-container-ships">
    <div className="mySlides-ships fade">
      <div className="mySlides-ships-flex">
        <Image
          alt="Ships"
          className="ship-specs squid"
          src="/assets/images/ship-4.webp"
          width={500}
          height={500}
        />
        <div className="specs">
          <h3> Starship: Scout </h3>
          <ul>
            <li>LV main power system and Battery Boxes</li>
            <li>LV Air Handler, fans and duct system</li>
            <li>LV FTL Jump Drive</li>
            <li>Small cargo area</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mySlides-ships fade">
      <div className="mySlides-ships-flex">
        <Image
          alt="Ships"
          className="ship-specs squid"
          src="/assets/images/ship-4.webp"
          width={500}
          height={500}
        />
        <div className="specs">
          <h3> Starship: Surveyor </h3>
          <ul>
            <li>LV main power system and Battery Boxes</li>
            <li>LV Air Handler, fans and duct system</li>
            <li>Advanced navigation system</li>
            <li>LV FTL Jump Drive</li>
            <li>Small cargo area</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mySlides-ships fade">
      <div className="mySlides-ships-flex">
        <Image
          alt="Ships"
          className="ship-specs squid"
          src="/assets/images/ship-4.webp"
          width={500}
          height={500}
        />
        <div className="specs">
          <h3> Starship: Cruiser </h3>
          <ul>
            <li>LV main power system and Battery Boxes</li>
            <li>LV Air Handler, fans and duct system</li>
            <li>Advanced navigation system</li>
            <li>LV FTL Jump Drive</li>
            <li>Medium cargo area</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mySlides-ships fade">
      <div className="mySlides-ships-flex">
        <Image
          alt="Ships"
          className="ship-specs squid"
          src="/assets/images/ship-4.webp"
          width={500}
          height={500}
        />
        <div className="specs">
          <h3> Starship: Medium Cruiser </h3>
          <ul>
            <li>MV main power system and Battery Boxes</li>
            <li>LV power subsystem</li>
            <li>MV Air Handler, fans and duct system</li>
            <li>Advanced navigation system</li>
            <li>MV FTL Jump Drive</li>
            <li>Medium cargo area</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mySlides-ships fade">
      <div className="mySlides-ships-flex">
        <Image
          alt="Ships"
          className="ship-specs squid"
          src="/assets/images/ship-4.webp"
          width={500}
          height={500}
        />
        <div className="specs">
          <h3> Starship: Large Cruiser </h3>
          <ul>
            <li>HV main power system and Battery Boxes</li>
            <li>MV power subsystem</li>
            <li>LV power subsystem</li>
            <li>MV Air Handler, fans and vent system</li>
            <li>Advanced navigation system</li>
            <li>HV FTL Jump Drive</li>
            <li>HMedium cargo area</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mySlides-ships fade">
      <div className="mySlides-ships-flex">
        <Image
          alt="Ships"
          className="ship-specs squid"
          src="/assets/images/ship-4.webp"
          width={500}
          height={500}
        />
        <div className="specs">
          <h3> Starship: Super Cruiser </h3>
          <ul>
            <li>HV main power system and Battery Boxes</li>
            <li>MV power subsystem</li>
            <li>LV power subsystem</li>
            <li>MV Air Handler, fans and vent system</li>
            <li>Advanced navigation system</li>
            <li>HV FTL Jump Drive</li>
            <li>Large cargo area</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mySlides-ships fade">
      <div className="mySlides-ships-flex">
        <Image
          alt="Ships"
          className="ship-specs squid"
          src="/assets/images/ship-4.webp"
          width={500}
          height={500}
        />
        <div className="specs">
          <h3> Starship: Mega Cruiser </h3>
          <ul>
            <li>Nuclear Reactor</li>
            <li>HV main power system and Battery Boxes</li>
            <li>MV power subsystem</li>
            <li>LV power subsystem</li>
            <li>MV Air Handler, fans and vent system</li>
            <li>Advanced navigation system</li>
            <li>HV FTL Jump Drive</li>
            <li>Huge cargo area</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ShipSpecification;
