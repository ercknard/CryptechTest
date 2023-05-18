import ModalGate from "./ModalGate";
import Image from "next/image";

const Modal= () => (

    <>

        <div id="myModal" className="modal">

        <ModalGate />

        <div className="modal-content">
            <div>
            {" "}
            <Image 
            alt="CryptechTest Banner"
            className="index-logo" 
            src="images/CryptechTest.png" 
            width={680}
            height={79}
            />
            {" "}
            </div>
            <div>
            {" "}
            <Image
            alt="Pepe Shot"
            className="index-logo" 
            src="images/pepe-head.png" 
            width={267}
            height={267}
            />
            {" "}
            </div>
            <br />
            <div className="loader-welcome text-motion">
            SELECTED THEME IS BEING LOADED{" "}
            </div>
        </div>
        </div>

    </>
    
    );
      
    export default Modal;