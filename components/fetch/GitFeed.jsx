import PipeToRight from "@components/materials/PipeToRight";
import GitFeedWeb from "./GitFeedWeb";
import GitFeedGame from "./GitFeedGame";
import Web from "./Web";
import Game from "./Game";

const GitFeed = () => (
  <>
    <PipeToRight />

    <section className="width-class">
      <h2
        data-aos="zoom-in"
        data-aos-duration={2000}
        className="glitch"
        data-glitch="Git Feed"
      >
        {" "}
        <div className="sec-title">Git Feed</div>{" "}
      </h2>

      <div id="feed-active-btn" className="agent-home">
        <Web /> <Game />
      </div>
    </section>

    <section className="container-main-feed">
      <div className="container-main feed-bg">
        <section className="width-class">
          <div className="the-ship feed-op">
            <GitFeedGame username="CryptechTest" />

            <GitFeedWeb username="ercknard" />
          </div>
        </section>
      </div>
    </section>
  </>
);

export default GitFeed;
