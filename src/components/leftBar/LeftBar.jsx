import './leftBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshakeAngle,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="section">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <span> User </span>
            <hr />
          </div>
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
        <hr />
        <div className="section">
          <div className="News">
            <FontAwesomeIcon className="news" icon={faNewspaper} size="lg" />
            <span> News </span>
          </div>
          <hr />
          <div className="section">
            <div className="resources">
              <FontAwesomeIcon
                className="Resources"
                icon={faHandshakeAngle}
                size="lg"
              />
              <span> Dev Resources For You </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
