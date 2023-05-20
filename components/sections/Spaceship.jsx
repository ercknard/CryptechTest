import Gate from "@components/materials/gates/Gate";
import PipeToRight from "@components/materials/PipeToRight";
import PipeToLeft from "@components/materials/PipeToLeft";
import Image from "next/image"
import GlassPipe from "@components/materials/GlassPipe";

const Spaceship = () => (

    <>  

            <PipeToRight />

            <section className="width-class">

            <Gate />

            <h2
                data-aos="zoom-in"
                data-aos-duration={500}
                data-aos-anchor-placement="bottom-bottom"
                className="glitch"
                data-glitch="THE SPACE STATION"
            >
                {" "}
                THE SPACE STATION{" "}
            </h2>
            <div
                className="the-ship radial-effect"
                data-aos-anchor-placement="bottom-bottom"
            >
                <Image
                alt="Spacehips"
                className="ship"
                data-aos="zoom-in-right"
                data-aos-duration={5000}
                data-aos-anchor-placement="bottom-bottom"
                src="/assets/images/ship.webp"
                width={1024}
                height={1024}
                />
                <Image
                alt="Spacehips"
                className="ship"
                data-aos="zoom-in-left"
                data-aos-duration={3000}
                data-aos-anchor-placement="bottom-bottom"
                src="/assets/images/asteroid-1-1.webp"
                width={1024}
                height={1024}
                />
                <Image
                alt="Spacehips"
                className="ship"
                data-aos="zoom-in-right"
                data-aos-duration={3000}
                data-aos-anchor-placement="bottom-bottom"
                src="/assets/images/asteroid-2-2.webp"
                width={1024}
                height={1024}
                />
                <Image
                alt="Spacehips"
                className="ship"
                data-aos="zoom-in-left"
                data-aos-duration={3000}
                data-aos-anchor-placement="bottom-bottom"
                src="/assets/images/asteroid-3-2.webp"
                width={1024}
                height={1024}
                />
                <Image
                alt="Spacehips"
                className="ship"
                data-aos="zoom-in-right"
                data-aos-duration={3000}
                data-aos-anchor-placement="bottom-bottom"
                src="/assets/images/asteroid-4-2.webp"
                width={1024}
                height={1024}
                />
            </div>

            <GlassPipe />
            
            </section>

            <PipeToLeft />
   
    </>

      );
      
      export default Spaceship;