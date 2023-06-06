import Image from "next/image";
import Comets from "../Comets";

const Squid = () => (
  <div className="mySlides-leads fade">
    <Image
      alt="Squid"
      className="pepe-admin"
      src="/assets/images/squid-land.webp"
      width={357}
      height={649}
    />
    <div className="test">
      <div>
        <Image
          alt="Squid"
          className="leads-photo squid"
          src="/assets/images/squid.gif"
          width={128}
          height={128}
        />
        <h3 className="to-center">Greetings, Welcome to CryptechTest</h3>
        <p>
          <ion-icon name="logo-discord" /> Discord: squidicuz
        </p>
        <p>"I am inviting you to join our Discord community."</p>
        <a
          className="a-button story-button"
          href="https://discord.gg/YDCSGp8h5V"
          target="_blank"
        >
          {" "}
          CryptechTest{" "}
        </a>
      </div>
    </div>
    <Comets />
  </div>
);

export default Squid;
