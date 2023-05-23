import PipeToRight from "@components/materials/PipeToRight";
import GateFeed from "@components/materials/gates/GateFeed";
import GitFeedWeb from "./GitFeedWeb";
import GitFeedGame from "./GitFeedGame";

const GitFeed= () => (

    <>

    <PipeToRight />

    <GateFeed />

    <section className="width-class">

    <h2
        data-aos="zoom-in"
        data-aos-duration={2000}
        className="glitch"
        data-glitch="Git Feed"
    >
        {" "}
        <div className="sec-title">
        Git Feed</div>{" "}
    </h2>

    <div className="the-ship">

    <GitFeedGame username="CryptechTest"/>

    <GitFeedWeb username="ercknard"/>

    </div>

    </section>

    </>
 
    );
      
    export default GitFeed;