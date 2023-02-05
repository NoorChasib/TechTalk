import './profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faLocationDot,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons';
import Posts from '../../components/posts/posts';

const Profile = () => {
  let url="#0";

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href={url}>
              <FontAwesomeIcon
                icon={faGithub}
                className="faIcon"
                size="lg"
                fixedWidth
              />
            </a>
            <a href={url}>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="faIcon"
                size="lg"
                fixedWidth
              />
            </a>
            <a href={url}>
              <FontAwesomeIcon
                icon={faFileLines}
                className="faIcon"
                size="lg"
                fixedWidth
              />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="faIcon"
                  size="lg"
                  fixedWidth
                />
                <span>Canada</span>
              </div>
              <div className="item">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="faIcon"
                  size="lg"
                  fixedWidth
                />
                <span>website.com</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            <FontAwesomeIcon
              icon={faEllipsis}
              className="faIcon"
              size="lg"
              fixedWidth
            />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
