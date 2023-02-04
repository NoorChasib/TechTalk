import './rightBar.scss';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        {/* <div className="item">
          <img
            src="https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-800x450.jpg"
            alt=""
          />
        </div> */}
        <div className="item">
          <span>Suggested For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-800x450.jpg"
                alt=""
              />
              <span>Jeff Bezos</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Ignore</button>
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
              <button>Follow</button>
              <button>Ignore</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <p>
                <span>Bill Gates</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <p>
                <span>John Doe</span> liked commented on a post
              </p>
            </div>
            <span>4 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <p>
                <span>Jack Dorsey</span> liked a post
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <p>
                <span>Larry Ellison</span> shared a post
              </p>
            </div>
            <span>9 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Active friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <div className="online" />
              <span>Bill Gates</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <div className="online" />
              <span>Larry Ellison</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <div className="online" />
              <span>Sergey Brin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <div className="online" />
              <span>Mark Zuckerberg</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png"
                alt=""
              />
              <div className="online" />
              <span>Bernard Arnault</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
