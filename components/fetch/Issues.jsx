"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Issues = () => {
  const [issues, setissues] = useState([]);
  const [labels, setlabels] = useState([]);

  useEffect(() => {
    const fetchissues = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/CryptechTest/cryptech/issues"
        );
        setissues(response.data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchissues();
  }, []);

  useEffect(() => {
    const fetchlabels = async () => {
      try {
        const responselabels = await axios.get(
          "https://api.github.com/repos/CryptechTest/cryptech/labels"
        );
        setlabels(responselabels.data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchlabels();
  }, []);

  return (
    <div>
      {issues.slice(0, 5).map((issues) => (
        <ul>
          <li>
            <h4>Title: {issues.title}</h4>
          </li>
          <li>
            <p>Update No. : {issues.number}</p>
          </li>
          {/* <li>
            <p>{issues.labels.map((label) => label.name)}</p>
          </li> */}
          <li>
            <p>{issues.body}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Issues;
