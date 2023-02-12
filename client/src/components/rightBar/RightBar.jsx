import './rightBar.scss';
import Friends from '../friends/friends';
import Recommends from '../recommend/recommend';


const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarFront">
        <div className="container">
          <Recommends />
          <div className="item">
            <span className="title">Sponsored</span>

            <div className="user">
              <div className='ad'>
              <div className="adImage">
                <a rel="noopener noreferrer" target="_blank" href="https://www.lighthouselabs.ca/">
                <img
                  src="https://mms.businesswire.com/media/20200915005320/en/821159/23/lhl-logo.jpg"
                  alt=""
                />
                </a>
                </div>
                <div>
                <p>
                Want to become a software developer? Check out our 12-week full-time program in Toronto, Vancouver, and Montreal.
                </p>
                </div>
                </div>
            </div>
          </div>
          <Friends />
        </div>
      </div>
    </div>
  );
};
export default RightBar;
