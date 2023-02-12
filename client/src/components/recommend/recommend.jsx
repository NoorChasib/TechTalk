import './recommend.scss';
import { makeRequest } from '../../axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Recommends = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const userId = useLocation().pathname.split('/')[2];
  const [ignoredUsers, setIgnoredUsers] = useState([]);
  const [showCount] = useState(3);

  const { data: relationshipData } = useQuery(['relationship'], () =>
    makeRequest.get('/relationships?followedUserId=' + userId).then((res) => {
      return res.data;
    })
  );

  console.log('relationship', relationshipData);
  console.log('currentUser', currentUser.id);

  const handleIgnore = (userId) => {
    setIgnoredUsers([...ignoredUsers, userId]);
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
