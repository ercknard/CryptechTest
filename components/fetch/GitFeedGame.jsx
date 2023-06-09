"use client";
import { useEffect, useState } from "react";
import { fetchGitFeeds } from "./gitServiceGame";

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
        <p className="feed-starter">
          {" "}
          CryptechTest Git Feed: (Showing 30 latest entries.){" "}
        </p>
        <ul>
          {feeds.map((event) => (
            <li key={event.id}>
              {" "}
              {event.sha}{" "}
              <div className="sos-1 sos-git mod news-selected-color">
                <div className="avatar-feed">
                  {" "}
                  <img
                    alt="Avatar"
                    src={event.actor.avatar_url}
                    width={50}
                    height={50}
                  />{" "}
                  <div className="time-feed">{event.actor.login} </div>
                  <div className="sha-feed">
                    {" "}
                    ID: {truncateSHAs(event.id)}... | {event.repo.name} -{" "}
                    {event.actor.login}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="time-feed">
                  {" "}
                  {event.created_at} {event.type}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="feed-starter"> End. </p>
      </div>
    </>
  );
};

export default GitFeedGame;
