import { useState, useContext } from 'react';
import { makeRequest } from '../../axios';
import './update.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '../../context/authContext';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Update = ({ setOpenUpdate, user }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    name: currentUser.name,
    email: currentUser.email,
    password: currentUser.password,
    city: currentUser.city,
    website: currentUser.website,
  });


  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await makeRequest.post('/upload', formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return makeRequest.put('/users', user);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['user']);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let coverUrl;
    let profileUrl;

    coverUrl = cover ? await upload(cover) : currentUser.coverPic;
    profileUrl = profile ? await upload(profile) : currentUser.profilePic;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });

    const updatedUser = {
      ...currentUser,
      coverPic: coverUrl,
      profilePic: profileUrl,
    };

    setCurrentUser(updatedUser);
    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
  };

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <form>
          <div className="files">
            <label htmlFor="profile">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : '/upload/' + currentUser.profilePic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="profile"
              style={{ display: 'none' }}
              onChange={(e) => {
                setProfile(e.target.files[0]);
              }}
            />

            <label htmlFor="cover">
              <span>Cover Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : '/upload/' + currentUser.coverPic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>

            <input
              type="file"
              id="cover"
              style={{ display: 'none' }}
              onChange={(e) => {
                setCover(e.target.files[0]);
              }}
            />
          </div>
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder={currentUser.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder={currentUser.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input type="text" name="password" onChange={handleChange} />

          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder={currentUser.city}
            onChange={handleChange}
          />

          <label>Website</label>
          <input
            type="text"
            name="website"
            placeholder={currentUser.website}
            onChange={handleChange}
          />

          <button onClick={handleClick}>Update</button>
        </form>
        <button className="close" onClick={() => setOpenUpdate(false)}>
          close
        </button>
      </div>
    </div>
  );
};

export default Update;
