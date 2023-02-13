import './navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faComments } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useEffect } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { makeRequest } from '../../axios';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const [userData, setUserData] = useState(currentUser);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await makeRequest.get('/users/find/' + currentUser.id);
        setUserData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  }, [currentUser]);

  const logout = () => {
    navigate('/logout');
  };

  const messenger = () => {
    navigate('/messenger');
  };

  const profile = () => {
    navigate(`/profile/${userData.id}`);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/users/find?q=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar">
      <div className="navbarFront">
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
          <form onSubmit={handleSearchSubmit}>
            <button type="submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for other users..."
              />
            </form>
            <div>
              {searchResults.map((user) => (
                <div key={user.id}>
                  <Link to={`/profile/${user.id}`}>{user.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <FontAwesomeIcon
            icon={faComments}
            onClick={messenger}
            className="faIcon"
            size="lg"
            fixedWidth
          />
            <div onClick={profile} className="userProfile">
              <img src={'/upload/' + currentUser.profilePic} alt="" />
              <span className='profileName'>{currentUser.name}</span>
            </div>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            onClick={logout}
            className="faIcon"
            size="lg"
            fixedWidth
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
