import Scout from "@components/materials/ships/Scout";
import Surveyor from "@components/materials/ships/Surveyor";
import Cruiser from "@components/materials/ships/Cruiser";
import MediumCruiser from "@components/materials/ships/MediumCruiser";
import LargeCruiser from "@components/materials/ships/LargeCruiser";
import SuperCruiser from "@components/materials/ships/SuperCruiser";
import MegaCruiser from "@components/materials/ships/MegaCruiser";
import ShipSpecification from "@components/materials/ships/ShipSpecifications";
import GearEarth from "@components/materials/gears/GearEarth";

const EarthText = () => (
  <section className="container-main-world">
    <div className="container-main world-bg">
      <div className="width-class world-op card">
        <GearEarth />
        <div
        // data-aos="zoom-out"
        // data-aos-easing="ease-in-out"
        // data-aos-duration={500}
        >
          <div className="glow" />
          <div className="pipe-padding">
            <h3> Starship Tiers: </h3>{" "}
            <div id="op-world">
              <ShipSpecification />
              <div id="ships-active-btn" className="agent-home">
                <Scout />
                <Surveyor />
                <Cruiser />
                <MediumCruiser />
                <LargeCruiser />
                <SuperCruiser />
                <MegaCruiser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EarthText;
