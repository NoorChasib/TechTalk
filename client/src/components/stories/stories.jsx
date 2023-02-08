import './stories.scss';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    // TEMPORARY
    {
      id: 12,
      name: 'John Doe',
      img:
        'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 21,
      name: 'John Doe',
      img:
        'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 31,
      name: 'John Doe',
      img:
        'https://images.pexels.com/photos/943081/pexels-photo-943081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 41,
      name: 'John Doe',
      img:
        'https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={'/upload/' + currentUser.profilePic} alt="" />
        <Link
          to={`/profile/${currentUser.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <span>{currentUser.name}</span>
        </Link>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Stories;
