import Image from "next/image";

const Scc = () => (
  <>
    <div className="test">
      <div>
        <Image
          alt="partners"
          className="test-coin squid"
          src="/assets/images/stakecube-logo.jpeg"
          width={400}
          height={400}
        />
        <h3 className="to-center">StakeCube</h3>
        {/* <p>
          <ion-icon name="logo-discord" /> Discord: Vanikoro
        </p> */}
        <p className="details">
          "StakeCube is the predominant crypto ecosystem originally launched in
          June 2018 as PoS Pool and has since grown to service over 75,000 Users
          and supporting 60+ different crypto assets with unique features across
          10+ apps, like an integrated Exchange, masternode hosting, on-board
          crypto mining and a powerful compounding interest system."
        </p>
        {/* <a
          className="a-button story-button"
          href="https://discord.com/invite/WxvrzzPFAH"
          target="_blank"
        >
          {" "}
          CryptechTest{" "}
        </a> */}
      </div>
    </div>
  </>
);

export default Scc;
