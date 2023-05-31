import OrbitalStation from "@components/materials/ships/OrbitalStation";

const EarthText = () => (
  <section className="container-main-world">
    <div className="container-main world-bg">
      <div className="width-class world-op card">
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration={500}
        >
          <div className="glow" />
          <div className="pipe-padding">
            <h3> Starship Tiers: </h3>{" "}
            <div id="op-world" className="agent-home">
              <OrbitalStation />
              <OrbitalStation />
              <OrbitalStation />
              <OrbitalStation />
              <OrbitalStation />
              <OrbitalStation />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EarthText;
