import Image from "next/image";
import Comets from "../Comets";

const Kyuhi = () => (
  <div className="mySlides-leads fade">
    <Image
      alt="Kyuhi"
      className="pepe-admin"
      src="/assets/images/kyuhi-land.webp"
      width={357}
      height={649}
    />
    <div className="test">
      <div>
        <Image
          alt="Kyuhi"
          className="leads-photo squid"
          src="/assets/images/kyuhi.webp"
          width={128}
          height={128}
        />
        <h3>Greetings, Welcome to CryptechTest</h3>
        <p>
          <ion-icon name="logo-discord" /> Discord: Kyuhi
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

export default Kyuhi;
