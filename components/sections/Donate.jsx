import CoinsAddress from "@components/materials/CoinAddress";
import Coins from "@components/materials/Coins";
import GearCoin from "@components/materials/gears/GearCoin";

const Donate = () => (
  <section className="container-main-coins">
    {/* <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration={3000}
      className="pipe-to-left"
    >
      {" "}
    </div> */}
    <div className="container-main coins-bg">
      <div className="width-class coins-op card">
        {/* <div data-aos="zoom-out" data-aos-duration={100}> */}
        <div className="glow" />
        <div className="pipe-padding">
          <div className="to-vert-center">
            <span>
              <GearCoin />{" "}
            </span>
            <h3>Donate:</h3>
          </div>
          <p>
            {" "}
            If you enjoy our server, or the plugins we make, and want to help
            contribute financial we happily accept cryptocurrency donations!{" "}
          </p>
          <Coins />
          <CoinsAddress />
        </div>
      </div>
    </div>
    {/* </div> */}
  </section>
);

export default Donate;
