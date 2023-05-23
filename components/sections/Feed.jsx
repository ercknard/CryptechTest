import Web from "@components/fetch/Web";
import Game from "@components/fetch/Game";

const Feed = () => (
  
    <section className="container-main-feed">
  <div className="container-main feed-bg">
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-duration={500}
      className="width-class feed-op card"
    >

      <div className="glow" />
      <div className="pipe-padding">

      <div id="feed-active-btn" className="agent-home">


        <Web />
        <Game />

        </div>


      </div>
    </div>
  </div>
</section>


);
  
export default Feed;