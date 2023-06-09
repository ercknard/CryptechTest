"use client";
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
        data-glitch="PLAY"
      >
        {" "}
        <div className="sec-title">PLAY</div>{" "}
      </h2>
      <div
        className="the-ship radial-effect"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="test">
          <div>
            <Image
              alt="Testcoin"
              className="test-coin squid"
              src="/assets/images/mug.png"
              width={512}
              height={512}
            />
            <h3 className="to-center">Join Us Now!</h3>
            <h4 className="details-server">Address: cryptechcraft.xyz</h4>
            <h4 className="details-server">Port: 30000</h4>
            <p className="details">
              "Minetest is an open source voxel game engine. It is available for
              free on Windows, macOS, GNU/Linux, FreeBSD, OpenBSD, DragonFly
              BSD, and Android."
            </p>
            <div className="to-center admins-icons">
              <Image
                alt="loader items"
                className="coin vert-move"
                src="/assets/images/squid-head.webp"
                width={150}
                height={150}
              />
              <Image
                alt="loader items"
                className="coin vert-move-2"
                src="/assets/images/pepita-head.webp"
                width={150}
                height={150}
              />
              <Image
                alt="loader items"
                className="coin vert-move-3"
                src="/assets/images/pepe-head.webp"
                width={150}
                height={150}
              />
              <Image
                alt="loader items"
                className="coin vert-move-4"
                src="/assets/images/kyuhi-head.webp"
                width={150}
                height={150}
              />
              <Image
                alt="loader items"
                className="coin vert-move-5"
                src="/assets/images/naen-head.webp"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
        <Comets />
      </div>

      {/* <GlassPipe /> */}
    </section>
  </>
);

export default Spaceship;
