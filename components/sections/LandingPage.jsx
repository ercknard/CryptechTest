import Image from 'next/image';
import Glitters from '@components/materials/Glitters';
import WebTitle from '@components/materials/WebTitle';

const LandingPage = () => (

    <>  

    <Glitters /> 
    
    <section className='earth-bg'>

            <Image data-aos="fade-up" data-aos-duration="3000"
                src='/assets/images/pepe.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='pepe-bg' />
            <Image data-aos="fade-right" data-aos-duration="3000"
                src='/assets/images/BG-B.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='back-bg'
                className='bg-img' />
            <Image data-aos="fade-down" data-aos-duration="3000"
                src='/assets/images/SUN.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='sun' />
            <Image data-aos="fade-up" data-aos-duration="3000"
                src='/assets/images/cloud.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='cloudI'
                className='cloudI clouds' />
            <Image data-aos="fade-left" data-aos-duration="3000"
                src='/assets/images/BG-M.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='mid-bg'
                className='bg-img' />
            <Image data-aos="fade-up" data-aos-duration="3000"
                src='/assets/images/BG-F.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='front-bg'
                className='bg-img' />
            <Image data-aos="fade-up" data-aos-duration="2000"
                src='/assets/images/BG-FF.webp'
                alt='parallax-bgs'
                priority='true'
                width={3620}
                height={1969}
                id='primary-front-bg'
                className='bg-img' />
            <Image data-aos="fade-up" data-aos-duration="1000"
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
      