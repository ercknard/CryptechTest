"use client";
import { useEffect, useState } from "react";
import { fetchGitIssues } from "./gitServiceIssues";

const GitFeedIssues = ({ username }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const data = await fetchGitIssues(username);
      setIssues(data);
    };

    fetchIssues();
  }, [username]);

  const truncateSHAs = (shas) => {
    const lengths = 20;
    return shas.substring(0, lengths);
  };

  return (
    <>
      <div className="mySlides-feeds fade feeds">
        <p className="feed-starter">
          {" "}
          CryptechTest Issues Feed: (Showing 30 latest entries.){" "}
        </p>
        <ul>
          {issues.map((issues) => (
            <li key={issues.id}>
              {" "}
              {issues.ids}{" "}
              <a className="a-button" href={issues.html_url} target="_blank">
                <div className="sos-1 sos-git mod news-selected-color">
                  <div className="avatar-feed">
                    {" "}
                    <img
                      alt="Avatar"
                      src={issues.user.avatar_url}
                      width={50}
                      height={50}
                    />{" "}
                    <div className="time-feed">{issues.user.login} </div>
                    <div className="sha-feed">
                      {" "}
                      ID: {issues.id} | {truncateSHAs(issues.title)}... -{" "}
                      {issues.user.login}{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="time-feed">
                    {" "}
                    {issues.created_at} {issues.comments} comment/s.
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="feed-starter"> End. </p>
      </div>
    </>
  );
};

export default GitFeedIssues;
