import SampleText from "@components/materials/SampleText";
import Issues from "@components/fetch/Issues";

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
          <h3> Announcements: </h3> <div id="op-space" className="agent"></div>
          <Issues />
        </div>
      </div>
    </div>
  </section>
);

export default ShipText;
