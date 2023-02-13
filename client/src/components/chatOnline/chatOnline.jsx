import './chatOnline.scss';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../axios';

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await makeRequest.get('/friends');
      setFriends(res.data);
    };
    getFriends();
  }, []);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f.userId)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    console.log('currentId: ', user);
    try {
      const res = await makeRequest.get(
        `/conversations/find/${currentId}/${user.userId}`
      );
      setCurrentChat(res.data);
      console.log('res.data: ', res.data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {friends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.profilePic
                  ? '/upload/' + o.profilePic
                  : '../../../public/upload/1675897758980628298_anonym_avatar_default_head_person_icon.png'
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
