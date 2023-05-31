import SampleText from "@components/materials/SampleText";
import Announcements from "@components/fetch/News";

const ShipText = () => (
  <section className="container-main-sky">
    <div className="container-main sky-bg">
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-duration={500}
        className="width-class sky-op card"
      >
        <div className="glow" />
        <div className="pipe-padding">
          <h3> News and Updates: </h3>{" "}
          <div id="op-space" className="agent"></div>
          <Announcements />
        </div>
      </div>
    </div>
  </section>
);

export default ShipText;
