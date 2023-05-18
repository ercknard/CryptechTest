import Image from 'next/image';

const Loader= () => (

    <>

        <section>
        <div id="loader" className="wrapper loader">
            <div className="loader-bgs">
            <Image 
                alt="pepe mug shot"
                className="loader-icon" 
                src="/assets/images/pepe-land-1x1.webp" 
                width={239}
                height={240}
                />
            <div className="loader-welcome text-motion">
                {" "}
                CryptechTest : MineTest Server{" "}
            </div>
            <Image 
                alt="loader items"
                className="coin vert-move" 
                src="/assets/images/Diamond_Ore.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-2" 
                src="/assets/images/Iron_Ore.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-3" 
                src="/assets/images/Copper_Ore.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-4" 
                src="/assets/images/Tin_Ore.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-5" 
                src="/assets/images/Gold_Ore.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-6" 
                src="/assets/images/Coal_Ore.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="Pepe Space"
                className="pepe-loader" 
                src="/assets/images/pepe-land.png" 
                width={357}
                height={649}
                />
            </div>
        </div>
        </section>

    </>
    
    );
      
    export default Loader;