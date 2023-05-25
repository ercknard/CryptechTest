
import GitFeedWeb from "@components/fetch/GitFeedWeb";
import GitFeedGame from "@components/fetch/GitFeedGame";
import Web from "@components/fetch/Web";
import Game from "@components/fetch/Game";

const GithubFeeds= () => (

    <>

    <section className="container-main-feed">
     <div className="container-main feed-bg">

     <section className="width-class">

    <div className="the-ship feed-op">

    <GitFeedGame username="CryptechTest"/>

    <GitFeedWeb username="ercknard"/>

    </div>

         <div id="feed-active-btn" className="agent-home">

<Web /> <Game />

</div>

    </section>

    </div>
    </section>

    </>
 
    );
      
    export default GithubFeeds;