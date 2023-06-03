"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const DiscordMessages = ({ channelId, token }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `https://discord.com/api/v10/channels/${channelId}/messages`,
          {
            headers: {
              Authorization: `Bot ${token}`,
            },
          }
        );

        const messagesData = response.data;
        setMessages(messagesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [channelId, token]);

  return (
    <div>
      <h2>Discord Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiscordMessages;
