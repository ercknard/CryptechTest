import Image from "next/image"
import WorldCredits from "./WorldCredits";

const BottomWorld= () => (

  <>

  <WorldCredits />

        <section>
          
          <Image             
          data-aos="zoom-in"
          data-aos-duration={2000}
          src='/assets/images/pepesolo.webp'
          alt='parallax-bgs'
          priority='true'
          width={3620}
          height={1969}
          className="cave-pepe"
          />

          <Image 
          alt="Clouds Bottom"
          className="cloudI clouds" 
          src="/assets/images/cloud.webp"
          priority='true'
          width={3620}
          height={1969} />

          <Image 
          alt="Earth Bottom"
          className="cave" 
          src="/assets/images/earth.webp"
          priority='true'
          width={3620}
          height={1969} />
        </section>

</>
    
    );
      
    export default BottomWorld;