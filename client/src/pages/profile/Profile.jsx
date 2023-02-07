import './profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faLocationDot,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons';
import Posts from '../../components/posts/posts';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { updateLocale } from 'moment';

const Profile = () => {
  let url = '#0';

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
      if (following) return makeRequest.delete('/relationships?userId=' + userId);
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


  return (
    <div className="profile">
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className="images">
            <img src={data.coverPic} alt="" className="cover" />
            <img src={data.profilePic} alt="" className="profilePic" />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href={url}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="faIcon"
                    size="lg"
                    fixedWidth
                  />
                </a>
                <a href={url}>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="faIcon"
                    size="lg"
                    fixedWidth
                  />
                </a>
                <a href={url}>
                  <FontAwesomeIcon
                    icon={faFileLines}
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
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="faIcon"
                      size="lg"
                      fixedWidth
                    />
                    <span>{data.website}</span>
                  </div>
                </div>
                {relisLoading ? (
                  'loading'
                ) : userId === currentUser.id ? (
                  <button>update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? 'Following'
                      : 'Follow'}
                  </button>
                )}
              </div>
              <div className="right">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="faIcon"
                  size="lg"
                  fixedWidth
                />
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="faIcon"
                  size="lg"
                  fixedWidth
                />
              </div>
            </div>
            <Posts userId={userId}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
