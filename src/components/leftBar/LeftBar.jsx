import './leftBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshakeAngle,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Leftbar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="section">
          <div className="user">
          <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
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
