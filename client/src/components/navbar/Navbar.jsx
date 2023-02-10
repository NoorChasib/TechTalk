import './navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faComments } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import axios from "axios"



const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const logout = () => {
    navigate('/logout');
  };
  
  const chat = () => {
    navigate('/chat');
    };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/users?q=${searchQuery}`);
      setSearchResults(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }


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
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for other users..."
            />
            <button type="submit">Search</button>
            </form>
            {searchResults.map(user => (
  <div key={user.id}>
    {user.name}
  </div>
))}
          </div>
        </div>

        <div className="right">
          <FontAwesomeIcon
            icon={faComments}
            onClick={chat}
            className="faIcon"
            size="lg"
            fixedWidth
          />
          <Link
            to={`/profile/${currentUser.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="userProfile">
              <img src={'/upload/' + currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
            </div>
          </Link>
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
