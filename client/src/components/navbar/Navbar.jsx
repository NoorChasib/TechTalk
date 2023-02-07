import './navbar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon,
  faSun,
  faComments,
  faBell,
} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <img src={require('../..//assets/logo.png')} alt="TechTalk" />
            <h4>TechTalk</h4>
          </div>
        </Link>
        {darkMode ? (
          <FontAwesomeIcon
            icon={faSun}
            onClick={toggle}
            className="faIcon"
            size="lg"
            fixedWidth
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            onClick={toggle}
            className="faIcon"
            size="lg"
            fixedWidth
          />
        )}
      </div>

      <div className="center">
        <div className="search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="faIcon"
            size="lg"
            fixedWidth
          />
          <input type="text" placeholder="search..." />
        </div>
      </div>

      <div className="right">
        <FontAwesomeIcon
          icon={faComments}
          className="faIcon"
          size="lg"
          fixedWidth
        />
        <FontAwesomeIcon
          icon={faBell}
          className="faIcon"
          size="lg"
          fixedWidth
        />
        <div className="userProfile">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
