import Image from "next/image"
import WorldCredits from "./WorldCredits";

const BottomWorld= () => (

  <>

  <WorldCredits />

        <section>
          <Image             
          data-aos="zoom-in"
          data-aos-duration={2000}
          data-aos-anchor-placement="bottom-bottom"
          src='/assets/images/pepemid.png'
          alt='parallax-bgs'
          priority='true'
          width={3620}
          height={1969}
          className="cave-pepe"
          />

          <Image 
          alt="Clouds Bottom"
          className="cloudII clouds-earth" 
          src="/assets/images/cloud.webp"
          width={3620}
          height={1969} />

          <Image 
          alt="Earth Bottom"
          className="cave" 
          src="/assets/images/earth.webp"
          width={3620}
          height={1969} />
        </section>

</>
    
    );
      
    export default BottomWorld;