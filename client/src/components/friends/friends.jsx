import './friends.scss';
import { makeRequest } from '../../axios';
import { useEffect, useState  } from 'react'; 
import { Link } from 'react-router-dom';


const Friends = () => {

  const [data, setData] = useState([]) 
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      makeRequest.get('/relationships').then((res) => {
        console.log('+++++++++++++++++++++++++++', res); 
        setData(res.data) 
        setLoading(false)
      });
    }, [])
  
  return (
    <div className="item">
      <span className="title">Friends</span>
      {loading
        ? 'loading'
        : data.map((relationships) => (
            <div className="user">
              <Link
            to={`/profile/${relationships.userId}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
              <div className="userInfo">
                <img src={'upload/'+ relationships.pic} alt="" /> 
                
                <div className="online" />
                <span>{relationships.username}</span>
              </div>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Friends;
