"use client"
import PipeToRight from "@components/materials/PipeToRight";
import { useEffect, useState } from 'react';
import { fetchGitFeed } from './gitService';

const GitFeed = ({ username }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const data = await fetchGitFeed(username);
      setFeed(data);
    };

    fetchFeed();
  }, [username]);

  const truncateSHA = (sha) => {
    const length = 5;
    return sha.substring(0, length);
  };

  return (
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
        <div className="sec-title">
        Git Feed</div>{" "}
    </h2>
    {/* <div className="feeds">
        {feed.map((event) => (
            feed.map((commits) => (
        <a className="a-button" href={event.html_url} target='_blank'> 
          <ul className='git-feed banner mod push-color' key={event.id}>
            <li class="avatar-feed"> <img src={event.actor.avatar_url} width={50} height={50} /> {event.actor.display_login} <p> Sha: {truncateSHA(event.id)}... |  -  </p></li>
            <li class="time-feed"> {event.created_at} </li>
            </ul>
            </a>
        ))))}
        </div> */}
        <div className="feeds">
          <ul>
        {feed.map((commits) => (
            <li key={commits.sha}> {commits.id} <a className="a-button" href={commits.html_url} target='_blank'> <div className='git-feed banner mod push-color'><div className="avatar-feed"> <img src={commits.committer.avatar_url} width={50} height={50} /> {commits.commit.committer.name} <div className="sha-feed"> Sha: {truncateSHA(commits.sha)}... | {commits.commit.message} - {commits.commit.committer.name} </div> </div> <div className="time-feed"> {commits.commit.committer.date}</div></div></a></li>
            ))}
            </ul>
            </div>
    </section>

    </>
  );
};

export default GitFeed;