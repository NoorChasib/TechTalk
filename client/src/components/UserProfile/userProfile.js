import React, { useState, useEffect } from 'react';
// import getUserRepos from './services/getUserRepos';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo(accessToken);
        setUser(userInfo);
      } catch (error) {
        setError(error);
      }
    };
    const fetchUserRepos = async () => {
      try {
        const userRepos = await getUserRepos(accessToken);
        setRepos(userRepos.slice(0, 6));
      } catch (error) {
        setError(error);
      }
    };
    if (accessToken) {
      fetchUserInfo();
      fetchUserRepos();
    }
  }, [accessToken]);

  if (!accessToken) {
    return <p>You must be logged in to see your profile.</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (!user || !repos) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.name} />
      <p>Username: {user.login}</p>
      <p>Name: {user.name}</p>
      <p>Bio: {user.bio}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <h2>Latest Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => localStorage.removeItem('access_token')}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;