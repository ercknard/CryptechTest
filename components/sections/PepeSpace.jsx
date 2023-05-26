import Image from 'next/image';

const PepeSpace = () => (

    <>  
    
    <div id='pepe'>

        <Image 
        alt='Pepe NPC'
        className='pepe' 
        src='/assets/images/pepe-land.webp' 
        width={357}
        height={649}
        />

        <div className='npc'>

            <Image
            alt='Pepe NPC'
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration={500}
            data-aos-anchor-placement='bottom-bottom'
            src='/assets/images/pepe-land.webp'
            id='pepe-land'
            width={357}
            height={649}
            />

            <p
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration={500}
            data-aos-anchor-placement='bottom-bottom'
            id='npc-text'
            >
            Hello, adventurer!
            </p>

        </div>

        </div>
        </>
      );
      
      export default PepeSpace;