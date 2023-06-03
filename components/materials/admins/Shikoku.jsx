import Image from "next/image";
import Comets from "../Comets";

const Shikoku = () => (
  <div className="mySlides-leads fade">
    <Image
      alt="Shikoku"
      className="pepe-admin"
      src="/assets/images/shikoku-land.webp"
      width={357}
      height={649}
    />
    <div className="test">
      <div>
        <Image
          alt="Shikoku"
          className="leads-photo squid"
          src="/assets/images/shikoku.gif"
          width={128}
          height={128}
        />
        <h3 className="to-center">Greetings, Welcome to CryptechTest</h3>
        <p>
          <ion-icon name="logo-discord" /> Discord: Shikoku
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

export default Shikoku;
