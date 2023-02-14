import Stories from '../../components/stories/stories';
import Posts from '../../components/posts/posts';
import Share from '../../components/share/share';
import './home.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Home = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home">
      <div className="homeFront">
        <div className="container">
          <Stories />
          <Share />
          {currentUser.id && <Posts userId = {currentUser.id} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
