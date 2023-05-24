import ModalGate from "./ModalGate";
import Image from "next/image";

const Modal= () => (

    <>

        <div id="myModal" className="modal">

        <ModalGate />

        <div className="modal-content">
            <div className="modal-figure"></div>
        {/* <Image 
                alt="pepe mug shot"
                className="loader-icon" 
                src="/assets/images/pack.png" 
                width={239}
                height={240}
                /> */}
            {/* <div className="loader-welcome text-motion">
                {" "}
                CryptechTest : MineTest Server{" "}
            </div> */}
            {/* <div
                data-aos="zoom-in"
                data-aos-duration={500}
                data-aos-anchor-placement="bottom-bottom"
                className="glitch modal-title"
                data-glitch="CryptechTest : MineTest Server"
            >
                {" "}
                CryptechTest : MineTest Server{" "}
            </div> */}
            <h1 className="modal-title"> CryptechTest SMP Server </h1>
            <Image 
                alt="loader items"
                className="coin vert-move" 
                src="/assets/images/squid-head.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-2" 
                src="/assets/images/pepita-head.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-3" 
                src="/assets/images/pepe-head.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-4" 
                src="/assets/images/kyuhi-head.png" 
                width={150}
                height={150}
                />
            <Image 
                alt="loader items"
                className="coin vert-move-5" 
                src="/assets/images/naen-head.png" 
                width={150}
                height={150}
                />
            {/* <Image 
                alt="loader items"
                className="coin vert-move-6" 
                src="/assets/images/Coal_Ore.png" 
                width={150}
                height={150}
                /> */}
            <Image 
                alt="Pepe Space"
                className="pepe-loader" 
                src="/assets/images/pepe-land.png" 
                width={357}
                height={649}
                />
        </div>
        </div>

    </>
    
    );
      
    export default Modal;