import React, { useState, useEffect } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../axios';


const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [stories, setStories] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetch('/api/stories')
      .then(response => response.json())
      .then(data => {
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
        <label htmlFor="file-input">
          <button>+</button>
        </label>
        <input
          type="file"
          id="file-input"
          name="file-name"
          onChange={handleFileSelect}
        />
        <button onClick={upload}>+</button>
        <img src='https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
    
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={`http://localhost:8800/upload/${story.img}`} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Stories;