import './rightBar.scss';
import Friends from '../friends/friends';


const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarFront">
        <div className="container">
          {/* <div className="item">
          <img
            src="https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-800x450.jpg"
            alt=""
          />
        </div> */}
          <div className="item">
            <span className="title">Suggested For You</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-800x450.jpg"
                  alt=""
                />
                <span>Jeff Bezos</span>
              </div>
              <div className="buttons">
                <button className="follow">Follow</button>
                <button className="ignore">Ignore</button>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                  alt=""
                />
                <span>Elon Musk</span>
              </div>
              <div className="buttons">
                <button className="follow">Follow</button>
                <button className="ignore">Ignore</button>
              </div>
            </div>
          </div>
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
