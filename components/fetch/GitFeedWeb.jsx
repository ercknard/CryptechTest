"use client"
import { useEffect, useState } from 'react';
import { fetchGitFeed } from './gitServiceWeb';

const GitFeedWeb = ({ username }) => {
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

        <div className="mySlides-feeds fade feeds">
            <p className="feed-starter"> Website Git Feed: </p>
          <ul>
        {feed.map((commits) => (
            <li key={commits.sha}> {commits.id} <a className="a-button" href={commits.html_url} target='_blank'> <div className='git-feed banner mod push-color'><div className="avatar-feed"> <img src={commits.committer.avatar_url} width={50} height={50} /> {commits.commit.committer.name} <div className="sha-feed"> Sha: {truncateSHA(commits.sha)}... | {commits.commit.message} - {commits.commit.committer.name} </div> </div> <div className="time-feed"> {commits.commit.committer.date} {commits.commit.comment_count} comment/s.</div></div></a></li>
            ))}
            </ul>
            <p className="feed-starter"> End. </p>
            </div>


    </>
  );
};

export default GitFeedWeb;