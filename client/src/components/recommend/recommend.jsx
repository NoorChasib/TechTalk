import './recommend.scss';
import { makeRequest } from '../../axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Recommends = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ignoredUsers, setIgnoredUsers] = useState(
    JSON.parse(localStorage.getItem('ignoredUsers')) || []
  );
  const [showCount] = useState(3);

  const handleIgnore = (userId) => {
    setIgnoredUsers([...ignoredUsers, userId]);
    localStorage.setItem(
      'ignoredUsers',
      JSON.stringify([...ignoredUsers, userId])
    );
  };

  useEffect(() => {
    makeRequest.get('/recommends').then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="item">
      <span className="title">Suggested For You</span>
      {loading
        ? 'loading'
        : data
            .filter((user) => !ignoredUsers.includes(user.userId))
            .slice(0, showCount)
            .map((recommends, i) => (
              <div className="user" key={i}>
                <Link
                  to={`/profile/${recommends.userId}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="userInfo">
                    <img src={'upload/' + recommends.profilePic} alt="" />
                    <span className="friendsUsername">
                      {recommends.username}
                    </span>
                  </div>
                </Link>
                <div className="buttons">
                  <button
                    className="ignore"
                    onClick={() => handleIgnore(recommends.userId)}
                  >
                    Ignore
                  </button>
                </div>
              </div>
            ))}
    </div>
  );
};

export default Recommends;
