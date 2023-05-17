import Image from "next/image";

const LandingPage = () => (

    <section className="earth-bg">
    <Image
              src='/assets/images/pepe.webp'
              alt='logo'
              width={10000}
              height={10000}
              id="pepe-bg"
            />
      <Image
              src='/assets/images/BG-B.webp'
              alt='logo'
              width={10000}
              height={10000}
              id="back-bg"
              className="bg-img"
            />
    <Image
              src='/assets/images/SUN.webp'
              alt='logo'
              width={10000}
              height={10000}
              id="sun"
            />
    <Image
              src='/assets/images/cloud.webp'
              alt='logo'
              width={10000}
              height={10000}
              id="cloudI"
              className="cloudI clouds"
            />
    <Image
              src='/assets/images/BG-M.webp'
              alt='logo'
              width={10000}
              height={10000}
              id="mid-bg"
              className="bg-img"
            />
    <Image
              src='/assets/images/BG-F.webp'
              alt='logo'
              width={10000}
              height={10000}
              id="front-bg"
              className="bg-img"
            />
    <Image
              src='/assets/images/BG-FF.webp'
              alt='logo'
              width={10000}
              height={10000}
              id="primary-front-bg"
              className="bg-img"
            />
    <Image
              src='/assets/images/BG-FFF.webp'
              alt='logo'
              width={10000}
              height={10000}
              id="secondary-front-bg"
              className="bg-img"
            />
            
      <h1 id="web_title"> Welcome to CryptechTest </h1>
      <svg>
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="100%">
            CRYPTECHTEST SMP SERVER
          </text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
        </g>
      </svg>
    </section>
      );
      
      export default LandingPage;
      