import Announcements from "@components/fetch/News";
import Gear from "@components/materials/gears/Gear";
import DCAnnouncements from "@components/discord/DCAnnouncements";

const ShipText = () => (
  <section className="container-main-sky">
    <div className="container-main sky-bg">
      <div className="width-class sky-op card">
        <Gear />
        <div div data-aos="zoom-out" data-aos-duration={100}>
          <div className="glow" />
          <div className="pipe-padding">
            <h3> News and Updates: </h3>{" "}
            <div id="op-space" className="agent"></div>
            {/* <DCAnnouncements /> */}
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShipText;
