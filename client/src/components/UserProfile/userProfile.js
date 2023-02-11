import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userProfile.scss';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const result = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUsername(result.data.login);
      setFollowers(result.data.followers);
      setFollowing(result.data.following);
    };
    const fetchRepos = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const result = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setRepos(result.data.slice(0, 6));
    };
    fetchData();
    fetchRepos();
  }, []);

  return (
    <div className="user-container">
      <div className="user-profile">
        <h3>GitHub Stats</h3>
        <p>Username: {username}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </div>
      <div className="user-repos">
        <h3>Latest Repositories:</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} rel="noopener noreferrer" target="_blank">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
