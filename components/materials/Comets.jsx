import Image from "next/image";

const Comets = () => (
  <>
    <Image
      alt="Earth"
      className="ship"
      // data-aos="zoom-in-left"
      // data-aos-duration={3000}
      // data-aos-anchor-placement="bottom-bottom"
      src="/assets/images/asteroid-1-1.webp"
      width={1024}
      height={1024}
    />
    <Image
      alt="Earth"
      className="ship"
      // data-aos="zoom-in-right"
      // data-aos-duration={3000}
      // data-aos-anchor-placement="bottom-bottom"
      src="/assets/images/asteroid-2-2.webp"
      width={1024}
      height={1024}
    />
    <Image
      alt="Earth"
      className="ship"
      // data-aos="zoom-in-left"
      // data-aos-duration={3000}
      // data-aos-anchor-placement="bottom-bottom"
      src="/assets/images/asteroid-3-2.webp"
      width={1024}
      height={1024}
    />
    <Image
      alt="Earth"
      className="ship"
      // data-aos="zoom-in-right"
      // data-aos-duration={3000}
      // data-aos-anchor-placement="bottom-bottom"
      src="/assets/images/asteroid-4-2.webp"
      width={1024}
      height={1024}
    />
  </>
);

export default Comets;
