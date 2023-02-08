import Stories from '../../components/stories/stories';
import Posts from '../../components/posts/posts';
import Share from '../../components/share/share';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="homeFront">
        <div className="container">
          <Stories />
          <Share />
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Home;
