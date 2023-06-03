import Image from "next/image";
import Comets from "../Comets";

const Vanikoro = () => (
  <div className="mySlides-leads fade">
    <Image
      alt="Vanikoro"
      className="pepe-admin"
      src="/assets/images/pepe-land.webp"
      width={357}
      height={649}
    />
    <div className="test">
      <div>
        <Image
          alt="Vanikoro"
          className="leads-photo squid"
          src="/assets/images/vanikoro.webp"
          width={128}
          height={128}
        />
        <h3>Greetings, Welcome to CryptechTest</h3>
        <p>
          <ion-icon name="logo-discord" /> Discord: Vanikoro
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
    <Comets />
  </div>
);

export default Vanikoro;
