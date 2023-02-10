import './leftBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { NewsContextProvider } from '../News/NewsContext';
import News from '../News/News';



const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="leftBarFront">
        <div className="container">
          <div className="menu">
            <Link
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="user">
                <img src={'/upload/' + currentUser.profilePic} alt="" />
                <span className='title'>{currentUser.name}</span>
              </div>
            </Link>
            <div className="item">
              <span>Bio</span>
            </div>
            <div className="item">
              <span>Other Platforms:</span>
            </div>
            <div className="item">
              <span>Friends</span>
            </div>
          </div>
          <div className="menu">
            <div className="news_title">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="faIcon"
                size="lg"
                fixedWidth
              />
              <span className='title'>News</span>
            </div>
            <NewsContextProvider>
              <News />
            </NewsContextProvider>
          </div>
          <div className="menu">
            <div className="dev">
              <FontAwesomeIcon
                icon={faHandshakeSimple}
                className="faIcon"
                size="lg"
                fixedWidth
              />
              <span className='title'>Tech Resources</span>
            </div>
            <div className="item">
              <span>General Resources</span>
            </div>
            <div className="item">
              <span>Programming Languages</span>
            </div>
            <div className="item">
              <span>Data Structures and Algorithms</span>
            </div>
            <div className="item">
              <span>Tools</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
