import './navbar.scss';
import { Link } from 'react-router-dom';
import BrightnessMediumOutlinedIcon from '@mui/icons-material/BrightnessMediumOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>TechTalk</span>
        </Link>
        <BrightnessMediumOutlinedIcon />
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Happy_smiley_face.png"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
