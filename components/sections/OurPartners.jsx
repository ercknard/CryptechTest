import PipeToRight from "@components/materials/PipeToRight";
import Image from "next/image";
import GatePartners from "@components/materials/gates/GatePartners";
import Comets from "@components/materials/Comets";
import Scc from "@components/materials/partners/Scc";

const OurPartners = () => (
  <>
    <PipeToRight />

    <GatePartners />

    <section className="width-class">
      <h2
        data-aos="zoom-in"
        data-aos-duration={2000}
        data-aos-anchor-placement="bottom-bottom"
        className="glitch"
        data-glitch="Our Partners"
      >
        {" "}
        <div className="sec-title">Our Partners </div>{" "}
      </h2>
      <div
        className="the-ship radial-effect"
        data-aos-anchor-placement="bottom-bottom"
      >
        <Scc />

        <Comets />
      </div>
    </section>
  </>
);

export default OurPartners;
