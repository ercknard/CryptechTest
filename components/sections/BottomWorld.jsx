import Image from "next/image"

const BottomWorld= () => (

        <div>
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
        </div>

    
    );
      
    export default BottomWorld;