import { React, useState, useEffect, useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../axios';

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [stories, setStories] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showCount] = useState(4);
  useEffect(() => {
    fetch('/api/stories')
      .then((response) => response.json())
      .then((data) => {
        setStories(data);
      });
  }, []);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      const res = await makeRequest.post('/stories', formData);
      window.location.reload();

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="stories">
      <div className="story">
        <Link
          to={`/profile/${currentUser.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <span>{currentUser.name}</span>
        </Link>
        <div class="upload-btn-wrapper">
          <input type="file" name="file" id="file" class="inputfile" onChange={handleFileSelect} />
          <label for="file">+</label>
        </div>

        <button onClick={upload}>+</button>
      </div>
      {stories
        .slice(0, showCount)
        .reverse()
        .map((story) => (
          <div className="story" key={story.id}>
            <img src={`/upload/${story.img}`} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
    </div>
  );
};
export default Stories;
