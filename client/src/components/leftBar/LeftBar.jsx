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

const stats = `https://github-readme-stats-a4kc.vercel.app/api/top-langs/?username=${currentUser.github}&layout=compact&show_icons=true&langs_count=8&line_height=30&border_radius=25&bg_color=FFFFFF00&title_color=0C90E9&text_color=0C90E9&hide_border=true&card_width=250`;

console.log("stats", currentUser)

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
            <img height="160em" src={stats} alt=''/>
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
              <span className='title'>Dev Resources For You</span>
            </div>
            <div className="item">
              <span>some resources here</span>
            </div>
            <div className="item">
              <span>some resources here</span>
            </div>
            <div className="item">
              <span>some resources here</span>
            </div>
            <div className="item">
              <span>some news here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
