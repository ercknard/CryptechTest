import axios from 'axios';

export default async (req, res) => {
  const { userId } = req.query;
  const token = 'MTA3NjAxODM1NzI0NzE2MDM4MA.GOysRD.AfhW49BH0xO-4T9VUFTeskxLC9eUvTbDBDMeMk'; // Replace with your Discord API token

  try {
    const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        Authorization: `Bot ${token}`,
      },
    });

    if (response.status === 200) {
      const avatar = response.data.avatar;
      const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png`;
      res.status(200).json({ avatarUrl });
    } else {
      res.status(response.status).json({ error: 'Failed to fetch user avatar' });
    }
  } catch (error) {
    console.error('Failed to fetch user avatar from Discord API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};