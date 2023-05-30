import Image from "next/image";
import SampleText from "@components/materials/SampleText";
import GearEarth from "@components/materials/gears/GearEarth";
import SeqseeCard from "@components/materials/admins/cards/SeqseeCard";
import OrbitalStation from "@components/materials/ships/OrbitalStation";

const EarthText = () => (
  <section className="container-main-world">
    <div className="container-main world-bg">
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-duration={500}
        className="width-class world-op card"
      >
        <div className="glow" />
        <div className="pipe-padding">
          <h3> Starship Tiers: </h3>{" "}
          <div id="op-world" className="agent-home">
            {/* <GearEarth />

            <Image
              alt="Pepe Head"
              className="loader-icon-1"
              src="/assets/images/pepe-head.webp"
              width={267}
              height={267}
            />

            <h3 className="glitch" data-glitch=" Pepe... ">
              {" "}
              Pepe...{" "}
            </h3> */}

            <OrbitalStation />
            <OrbitalStation />
            <OrbitalStation />
            <OrbitalStation />
            <OrbitalStation />
            <OrbitalStation />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EarthText;
