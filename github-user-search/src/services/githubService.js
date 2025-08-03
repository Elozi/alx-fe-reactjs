import axios from 'axios';

export const fetchUserData = async (username) => {
  const URL = `https://api.github.com/users/${username}`;
  const headers = {};

  // Optional: Add auth if you are using a token
  const token = import.meta.env.VITE_GITHUB_API_KEY;
  if (token) {
    headers.Authorization = `token ${token}`;
  }

  const response = await axios.get(URL, { headers });
  return response.data;
};
