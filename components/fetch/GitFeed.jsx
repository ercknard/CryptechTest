import PipeToRight from "@components/materials/PipeToRight";
import GateFeed from "@components/materials/gates/GateFeed";
import GitFeedWeb from "./GitFeedWeb";
import GitFeedGame from "./GitFeedGame";
import Web from "./Web";
import Game from "./Game";

const GitFeed= () => (

    <>

    <PipeToRight />

    {/* <GateFeed /> */}

    <section className="width-class">

    <h2
        data-aos="zoom-in"
        data-aos-duration={2000}
        className="glitch"
        data-glitch="Git Feeds"
    >
        {" "}
        <div className="sec-title">
        Git Feeds</div>{" "}
    </h2>

    <div id="feed-active-btn" className="agent-home">

    <Web /> <Game />

    </div>

    <div className="the-ship feed-op">

    <GitFeedGame username="CryptechTest"/>

    <GitFeedWeb username="ercknard"/>

    </div>

    </section>

    </>
 
    );
      
    export default GitFeed;