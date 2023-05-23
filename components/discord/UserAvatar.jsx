"use client"
import { useEffect, useState } from 'react';

const UserAvatar = ({ userId }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch(`./discord-avatar?userId=${userId}`);
        const data = await response.json();

        if (response.ok) {
          setAvatarUrl(data.avatarUrl);
        } else {
          console.error('Failed to fetch user avatar:', data.error);
        }
      } catch (error) {
        console.error('Failed to fetch user avatar:', error);
      }
    };

    fetchAvatar();
  }, [userId]);

  if (avatarUrl) {
    return <img src={avatarUrl} alt="User Avatar" />;
  }

  return null;
};

export default UserAvatar;