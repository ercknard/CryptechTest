import axios from "axios";

const API_URL = "https://api.github.com/repos";

export const fetchGitFeed = async (username) => {
  try {
    const response = await axios.get(
      `${API_URL}/${username}/CryptechTest/commits`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Git feed:", error);
    return [];
  }
};
