import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("access_token");
      const result = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUsername(result.data.login);
      setFollowers(result.data.followers);
      setFollowing(result.data.following);
    };
    const fetchRepos = async () => {
      const accessToken = localStorage.getItem("access_token");
      const result = await axios.get("https://api.github.com/user/repos", {
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
    <div >
      <h2>GitHub Stats</h2>
      <p>Username: {username}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <h3>Latest 6 Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
