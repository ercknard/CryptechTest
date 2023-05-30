import Image from "next/image";
import SampleText from "@components/materials/SampleText";
import Gear from "@components/materials/gears/Gear";

const ShipText = () => (
  <section className="container-main-sky">
    <div className="container-main sky-bg">
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-duration={500}
        className="width-class sky-op card"
      >
        <div className="glow" />
        <div className="pipe-padding">
          <div id="op-space" className="agent">
            <Gear />

            <Image
              alt="Pepita Head"
              className="loader-icon-1"
              src="/assets/images/pepita-head.webp"
              width={267}
              height={267}
            />

            <h3 className="glitch" data-glitch=" Pepita... ">
              {" "}
              Pepita...{" "}
            </h3>
          </div>

          <SampleText />
        </div>
      </div>
    </div>
  </section>
);

export default ShipText;
