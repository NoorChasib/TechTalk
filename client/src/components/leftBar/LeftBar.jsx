import './leftBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { NewsContextProvider } from '../News/NewsContext';
import News from '../News/News';




const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const profile = () => {
    navigate(`/profile/${currentUser.id}`);
  };

  const resources = () => {
    navigate(`/resources`);
  };

  const news = () => {
    navigate(`/news`);
  };

  const stats = `https://github-readme-stats-a4kc.vercel.app/api/top-langs/?username=${currentUser.github}&layout=compact&show_icons=true&langs_count=8&line_height=30&border_radius=25&bg_color=FFFFFF00&title_color=0C90E9&text_color=0C90E9&hide_border=true&card_width=250`;

  return (
    <div className="leftBar">
      <div className="leftBarFront">
        <div className="container">
          <div className="menu">
              <div onClick={profile} className="user">
                <img src={'/upload/' + currentUser.profilePic} alt="" />
                <span className='title'>{currentUser.name}</span>
              </div>
            <img height="160em" src={stats} alt=''/>
          </div>
          <div className="menu">
            <div onClick={news} className="news_title">
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
            <div onClick={resources} className="news_title">
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
