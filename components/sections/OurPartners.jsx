import PipeToRight from "@components/materials/PipeToRight";
import PipeToLeft from "@components/materials/PipeToLeft";
import Image from "next/image"
import GatePartners from "@components/materials/gates/GatePartners";
import Comets from "@components/materials/Comets";

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
                <div className="sec-title">
                Our Partners </div>{" "}
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
            
            </section>

            <PipeToLeft />
   
    </>

      );
      
      export default OurPartners;