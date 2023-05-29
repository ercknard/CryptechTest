import Image from "next/image";
import SampleText from "@components/materials/SampleText";
import GearEarth from "@components/materials/gears/GearEarth";

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
          <div id="op-world" className="agent">
            <GearEarth />

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
            </h3>
          </div>

          <SampleText />
        </div>
      </div>
    </div>
  </section>
);

export default EarthText;
