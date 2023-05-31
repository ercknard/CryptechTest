import axios from "axios";

const API_URL = "https://api.github.com/repos";

export const fetchGitIssues = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}/cryptech/issues`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Git Issues:", error);
    return [];
  }
};
