import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos
    : '',
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchUserData(formData);
      setUsers(results.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded space-y-4">
        <h2 className="text-lg font-semibold">Advanced GitHub User Search</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Minimum Repositories"
          value={formData.minRepos}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-700">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user.</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center space-x-4 bg-gray-100 p-4 rounded">
            <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-lg font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
