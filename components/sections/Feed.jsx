import Web from "@components/fetch/Web";
import Game from "@components/fetch/Game";

const Feed = () => (
  
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