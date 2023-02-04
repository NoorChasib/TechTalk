import './leftBar.scss';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
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
        <div className="menu">
          <div className="news">
            <NewspaperOutlinedIcon />
            <span>News</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="dev">
            <HandshakeOutlinedIcon />
            <span>Dev Resources For You</span>
          </div>
          <div className="item">
            <span>some resources here</span>
          </div>
          <div className="item">
            <span>some resources here</span>
          </div>
          <div className="item">
            <span>some resources here</span>
          </div>
          <div className="item">
            <span>some news here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
