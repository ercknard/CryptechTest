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

  const truncateSHAs = (shas) => {
    const lengths = 750;
    if (shas) {
      return shas.substring(0, lengths);
    }
    return "";
  };

  return (
    <div>
      {announcement.slice(0, 3).map((announcement) => (
        <div className="sos" key={announcement.node_id}>
          <ul className="sos-1 mod news-selected-color news-sos">
            <li>
              <h3 className="sos-2">
                {" "}
                <img
                  className="squid"
                  alt="Avatar"
                  src="/assets/images/mug.png"
                  width={50}
                  height={50}
                />
                #{announcement.number} : {announcement.title}
              </h3>
              <p>{truncateSHAs(announcement.body)}....</p>
            </li>
            {/* <li>
            <p>{announcement.labels.map((label) => label.name)}</p>
          </li> */}
          </ul>
          <a
            className="a-button to-right"
            target="_blank"
            href={announcement.html_url}
          >
            {" "}
            Read more...{" "}
          </a>
        </div>
      ))}
    </div>
  );
};

export default announcement;
