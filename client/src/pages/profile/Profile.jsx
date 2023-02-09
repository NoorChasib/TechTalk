import './profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons';
import Posts from '../../components/posts/posts';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Update from '../../components/update/Update';
import UserProfile from '../../components/UserProfile/userProfile';

const Profile = () => {
  let url = '#0';

  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split('/')[2]);

  

  const { isLoading, error, data } = useQuery(['user'], () =>
    makeRequest.get('/users/find/' + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: relisLoading, data: relationshipData } = useQuery(
    ['relationship'],
    () =>
      makeRequest.get('/relationships?followedUserId=' + userId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete('/relationships?userId=' + userId);
      return makeRequest.post('/relationship', { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['relationship']);
      },
    }
  );
  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  const handleClick = async () => {
    const clientId = "8221614e5bcb4ab7fbe2";
    const redirectUri = encodeURIComponent('http://localhost:3000/callback');

    window.location = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
  };

  return (
    <div className="profile">
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className="profileFront">
            <div className="profileContainer">
              <div className="images">
                <img
                  src={'/upload/' + currentUser.coverPic}
                  alt=""
                  className="cover"
                />
                <img
                  src={'/upload/' + currentUser.profilePic}
                  alt=""
                  className="profilePic"
                />
              </div>
            </div>

            <div className="uInfo">
              <div className="left">
                <button onClick={handleClick}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="faIcon"
                    size="lg"
                    fixedWidth
                  />
                </button>
                <a href={url}>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="faIcon"
                    size="lg"
                    fixedWidth
                  />
                </a>
              </div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="faIcon"
                      size="lg"
                      fixedWidth
                    />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <a href={url}>
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="faIcon"
                        size="lg"
                        fixedWidth
                      />
                    </a>
                    <span>{data.website}</span>
                  </div>
                </div>

                {relisLoading ? (
                  'loading'
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>Update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? 'Following'
                      : 'Follow'}
                  </button>
                )}
              </div>
              <div className="right">
                <a href={url}>
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="faIcon"
                    size="lg"
                    fixedWidth
                  />
                </a>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="faIcon"
                  size="lg"
                  fixedWidth
                />
              </div>

              <UserProfile />
            </div>
            {userId && <Posts userId={userId} />}
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
