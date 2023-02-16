import './friends.scss';
import { makeRequest } from '../../axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Friends = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeRequest.get('/friends').then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="item">
      <span className="title">Friends</span>
      {loading
        ? 'loading'
        : data.slice(0, 5).map((friends, i) => (
            <div className="user" key={i}>
              <Link
                to={`/profile/${friends.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="userInfo">
                  <img src={'upload/' + friends.profilePic} alt="" />

                  <div className="online" />
                  <span className="friendsUsername">{friends.username}</span>
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Friends;
