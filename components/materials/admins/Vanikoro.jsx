import Image from "next/image";

const Vanikoro= () => (

<div className="mySlides-leads fade">
      <Image  alt="Vanikoro" className="pepe-admin" src="/assets/images/pepe-land.png"           width={357}
          height={649}/>
      <div className="to-flex">
        {/* <Image
        alt="Vanikoro"
        //   data-aos="fade-up-right"
        //   data-aos-easing="linear"
        //   data-aos-duration={500}
        //   data-aos-anchor-placement="bottom-bottom"
          className="leads-portrait squid"
          src="/assets/images/pepe-land.png"
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
           alt="Vanikoro"
            className="leads-photo"
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
    </div>
    
    );
      
    export default Vanikoro;