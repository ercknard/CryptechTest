"use client"
import { useEffect, useState } from 'react';
import { fetchGitFeeds } from './gitServiceGame';

const GitFeedGame = ({ username }) => {
  const [feeds, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const data = await fetchGitFeeds(username);
      setFeed(data);
    };

    fetchFeeds();
  }, [username]);

  const truncateSHAs = (sha) => {
    const lengths = 5;
    return sha.substring(0, lengths);
  };

  return (
<>

        <div className="mySlides-feeds fade feeds">
            <p className="feed-starter"> Game Git Feed: (Public repos) </p>
          <ul>
        {feeds.map((event) => (
            <li key={event.id}> {event.sha} <div className='git-feed banner mod push-color'><div className="avatar-feed"> <img src={event.actor.avatar_url} width={50} height={50} /> {event.actor.login} <div className="sha-feed"> ID: {truncateSHAs(event.id)}... | {event.repo.name} - {event.actor.login} </div> </div> <div className="time-feed"> {event.created_at}</div></div></li>
            ))}
            </ul>
            <p className="feed-starter"> End. </p>
            </div>


    </>
  );
};

export default GitFeedGame;