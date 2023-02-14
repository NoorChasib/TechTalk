import './message.scss';
import { memo, useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios';

const getOtherUserId = (message, currentUser) => {
  if (message.sender !== currentUser.id) {
    return message.sender;
  }
};

const Message = ({ message, own }) => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const otherUsersId = getOtherUserId(message, currentUser);

  useEffect(() => {
    if (otherUsersId) {
      const getUser = async () => {
        try {
          const res = await makeRequest.get('/users/find/' + otherUsersId);
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }
  }, [otherUsersId]);

  const imgSrc = own
    ? '/upload/' + currentUser.profilePic
    : `/upload/${user?.profilePic}`;

  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img className="messageImg" src={imgSrc} alt="" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{moment(message.createdAt).fromNow()}</div>
    </div>
  );
};

export default memo(Message);
