import GitFeedWeb from "@components/fetch/GitFeedWeb";
import GitFeedGame from "@components/fetch/GitFeedGame";
import GitFeedIssues from "@components/fetch/GitFeedIssues";
import Web from "@components/fetch/Web";
import Game from "@components/fetch/Game";
import Issues from "@components/fetch/Issues";
import GearFeed from "@components/materials/gears/GearFeed";

const GithubFeeds = () => (
  <>
    <section className="container-main-feed">
      <div className="container-main feed-bg">
        <section className="width-class feed-op card">
          <GearFeed />
          <div div data-aos="zoom-out" data-aos-duration={100}>
            <div className="glow" />
            <div className="pipe-padding">
              <h3> Git Feed: </h3>
              <span id="feed-active-btn" className="agent-home">
                <Web /> <Issues /> <Game />
              </span>
            </div>

            <GitFeedGame username="CryptechTest" />

            <GitFeedIssues username="CryptechTest" />

            <GitFeedWeb username="ercknard" />
          </div>
        </section>
      </div>
    </section>
  </>
);

export default GithubFeeds;
