import Image from "next/image";
import Comets from "../Comets";

const Seqsee= () => (

<div className="mySlides-leads fade">
      <Image  alt="Seqsee" className="pepe-admin" src="/assets/images/pepita-land.webp"           width={357}
          height={649}/>
      <div className="to-flex">
        <div>
          <Comets />
          <Image
           alt="Seqsee"
            className="leads-photo squid"
            src="/assets/images/seqsee.gif"
            width={128}
            height={128}
          />
          <h3>Greetings, Welcome to CryptechTest</h3>
          <p>
            <ion-icon name="logo-discord" /> Discord: Seqsee
          </p>
          <p>"I am inviting you to join our Discord community."</p>
          <a
            className="a-button story-button"
            href="https://discord.com/invite/WxvrzzPFAH"
            target="_blank"
          >
            {" "}
            CryptechTest{" "}
          </a>
        </div>
      </div>
    </div>
    
    );
      
    export default Seqsee;