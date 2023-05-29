import PipeToRight from "@components/materials/PipeToRight";
import Image from "next/image";
import GateEarth from "@components/materials/gates/GateEarth";
import Comets from "@components/materials/Comets";

const Earth = () => (
  <>
    <PipeToRight />

    <GateEarth />

    <section className="width-class">
      <h2
        data-aos="zoom-in"
        data-aos-duration={2000}
        data-aos-anchor-placement="bottom-bottom"
        className="glitch"
        data-glitch="STARSHIPS"
      >
        {" "}
        <div className="sec-title">STARSHIPS</div>{" "}
      </h2>
      <div
        className="the-ship radial-effect"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Comets />
        <Image
          alt="Earth"
          className="ship squid"
          data-aos="zoom-in-right"
          data-aos-duration={5000}
          data-aos-anchor-placement="bottom-bottom"
          src="/assets/images/ship-4.webp"
          width={1024}
          height={1024}
        />
      </div>
    </section>
  </>
);

export default Earth;
