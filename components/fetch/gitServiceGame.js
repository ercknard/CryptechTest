import axios from 'axios';

const API_URL = 'https://api.github.com';

export const fetchGitFeeds = async (username) => {
  try {
    const responses = await axios.get(`${API_URL}/users/${username}/events`);
    return responses.data;

  } catch (error) {
    console.error('Error fetching Git feed:', error);
    return [];
  }
};