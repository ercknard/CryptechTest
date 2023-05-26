import Image from "next/image";

const Shikoku= () => (

<div className="mySlides-leads fade">
      <Image  alt="Shikoku" className="pepe-admin" src="/assets/images/shikoku-land.png"           width={357}
          height={649}/>
      <div className="to-flex">
        {/* <Image
        alt="Shikoku"
        //   data-aos="fade-up-right"
        //   data-aos-easing="linear"
        //   data-aos-duration={500}
        //   data-aos-anchor-placement="bottom-bottom"
          className="leads-portrait squid"
          src="/assets/images/shikoku-land.png"
          width={357}
          height={649}
        /> */}
        <div
        //   data-aos="zoom-out-left"
        //   data-aos-easing="linear"
        //   data-aos-duration={500}
        //   data-aos-anchor-placement="bottom-bottom"
        >
          <Image
           alt="Shikoku"
            className="leads-photo squid"
            src="/assets/images/shikoku.gif"
            width={128}
            height={128}
          />
          <h3>Greetings, Welcome to CryptechTest</h3>
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
    </div>
    
    );
      
    export default Shikoku;