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
        <div div data-aos="zoom-out" data-aos-duration={100}>
          <div className="glow" />
          <div className="pipe-padding">
            <div className="to-vert-center">
              <span>
                <GearEarth />{" "}
              </span>
              <h3>Starship Tiers:</h3>
            </div>
            <div id="op-world" className="to-flex-ship">
              <ShipSpecification />
              <div id="ships-active-btn" className="agent-home-ship">
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
