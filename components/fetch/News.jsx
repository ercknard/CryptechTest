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

  return (
    <div>
      {announcement.slice(0, 5).map((announcement) => (
        <ul key={announcement.node_id}>
          <li>
            <h4>Title: {announcement.title}</h4>
          </li>
          <li>
            <p>Update No. : {announcement.number}</p>
          </li>
          {/* <li>
            <p>{announcement.labels.map((label) => label.name)}</p>
          </li> */}
          <li>
            <p>{announcement.body}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default announcement;
