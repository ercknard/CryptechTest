import Image from 'next/image';
import Glitters from '@components/materials/Glitters';
import WebTitle from '@components/materials/WebTitle';
import GateLoader from "@components/materials/GateLoader";

const LandingPage = () => (

    <>  

    <Glitters /> 

    <GateLoader />
    
    <section className='earth-bg'>

            <Image
                src='/assets/images/pepe.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='pepe-bg' />
            <Image
                src='/assets/images/BG-B.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='back-bg'
                className='bg-img' />
            <Image
                src='/assets/images/SUN.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='sun' />
            <Image
                src='/assets/images/cloud.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='cloudI'
                className='cloudI clouds' />
            <Image
                src='/assets/images/BG-M.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='mid-bg'
                className='bg-img' />
            <Image
                src='/assets/images/BG-F.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='front-bg'
                className='bg-img' />
            <Image
                src='/assets/images/BG-FF.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='primary-front-bg'
                className='bg-img' />
            <Image
                src='/assets/images/BG-FFF.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='secondary-front-bg'
                className='bg-img' />

        <WebTitle /> 

        </section>
        </>
      );
      
      export default LandingPage;
      