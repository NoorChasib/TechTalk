import './navbar.scss';
import { Link } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
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
          <span className="logoName">TechTalk</span>
        </Link>
        {darkMode ? (
          <LightModeOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
      </div>

      <div className="center">
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search..." />
        </div>
      </div>

      <div className="right">
        <ChatOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
