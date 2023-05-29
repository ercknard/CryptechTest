import ModalGate from "./ModalGate";
import Image from "next/image";

const Modal = () => (
  <>
    <div id="myModal" className="modal">
      <ModalGate />

      <div className="modal-content">
        <div className="modal-figure"></div>
        <h1 className="modal-title"> CryptechTest SMP Server </h1>
        <Image
          alt="loader items"
          className="coin vert-move"
          src="/assets/images/squid-head.webp"
          width={150}
          height={150}
        />
        <Image
          alt="loader items"
          className="coin vert-move-2"
          src="/assets/images/pepita-head.webp"
          width={150}
          height={150}
        />
        <Image
          alt="loader items"
          className="coin vert-move-3"
          src="/assets/images/pepe-head.webp"
          width={150}
          height={150}
        />
        <Image
          alt="loader items"
          className="coin vert-move-4"
          src="/assets/images/kyuhi-head.webp"
          width={150}
          height={150}
        />
        <Image
          alt="loader items"
          className="coin vert-move-5"
          src="/assets/images/naen-head.webp"
          width={150}
          height={150}
        />
        <Image
          alt="Pepe Space"
          className="pepe-loader"
          src="/assets/images/pepe-land.webp"
          width={357}
          height={649}
        />
      </div>
    </div>
  </>
);

export default Modal;
