import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const URL = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;
  const headers = {};

  const token = import.meta.env.VITE_GITHUB_API_KEY;
  if (token) {
    headers.Authorization = `token ${token}`;
  }

  const response = await axios.get(URL, { headers });
  return response.data;
};
