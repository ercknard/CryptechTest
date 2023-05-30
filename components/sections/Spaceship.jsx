import Gate from "@components/materials/gates/Gate";
import PipeToRight from "@components/materials/PipeToRight";
import Image from "next/image";
import GlassPipe from "@components/materials/GlassPipe";
import Comets from "@components/materials/Comets";

const Spaceship = () => (
  <>
    <PipeToRight />

    <Gate />

    <section className="width-class">
      <h2
        data-aos="zoom-in"
        data-aos-duration={2000}
        data-aos-anchor-placement="bottom-bottom"
        className="glitch"
        data-glitch="ORBITAL STATION"
      >
        {" "}
        <div className="sec-title">ORBITAL STATION</div>{" "}
      </h2>
      <div
        className="the-ship radial-effect"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Image
          alt="Spacehips"
          className="ship squid"
          data-aos="zoom-in-right"
          data-aos-duration={5000}
          data-aos-anchor-placement="bottom-bottom"
          src="/assets/images/ship-2.webp"
          width={1024}
          height={1024}
        />
        <Comets />
      </div>

      <GlassPipe />
    </section>
  </>
);

export default Spaceship;
