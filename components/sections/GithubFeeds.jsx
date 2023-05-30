import GitFeedWeb from "@components/fetch/GitFeedWeb";
import GitFeedGame from "@components/fetch/GitFeedGame";
import Web from "@components/fetch/Web";
import Game from "@components/fetch/Game";

const GithubFeeds = () => (
  <>
    <section className="container-main-feed">
      <div className="container-main feed-bg">
        <section className="width-class feed-op card">
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration={500}
            className="the-ship"
          >
            <div className="glow" />
            <div className="pipe-padding">
              <h3> Git Feed: </h3>
              <span id="feed-active-btn" className="agent-home">
                <Web /> <Game />
              </span>
            </div>

            <GitFeedGame username="CryptechTest" />

            <GitFeedWeb username="ercknard" />
          </div>
        </section>
      </div>
    </section>
  </>
);

export default GithubFeeds;
