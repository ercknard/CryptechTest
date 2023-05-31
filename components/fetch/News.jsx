"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const announcement = () => {
  const [announcement, setannouncement] = useState([]);
  const [labels, setlabels] = useState([]);

  useEffect(() => {
    const fetchannouncement = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/CryptechTest/cryptech/issues"
        );
        setannouncement(response.data);
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    };

    fetchannouncement();
  }, []);

  useEffect(() => {
    const fetchlabels = async () => {
      try {
        const responselabels = await axios.get(
          "https://api.github.com/repos/CryptechTest/cryptech/labels"
        );
        setlabels(responselabels.data);
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    };

    fetchlabels();
  }, []);

  const truncateSHAs = (sha) => {
    const lengths = 1000;
    return sha.substring(0, lengths);
  };

  return (
    <div className="sos">
      {announcement.slice(0, 3).map((announcement) => (
        <>
          <ul className="sos-1 mod" key={announcement.node_id}>
            <li>
              <h3 className="sos-2">
                {" "}
                <img
                  alt="Avatar"
                  src="/assets/images/mug.png"
                  width={50}
                  height={50}
                />
                #{announcement.number} : {announcement.title}
              </h3>
            </li>
            {/* <li>
            <p>{announcement.labels.map((label) => label.name)}</p>
          </li> */}
            <li>
              <p>{truncateSHAs(announcement.body)}....</p>
            </li>
          </ul>
          <a
            className="a-button to-right"
            target="_blank"
            href={announcement.html_url}
          >
            {" "}
            Read more...{" "}
          </a>
        </>
      ))}
    </div>
  );
};

export default announcement;
