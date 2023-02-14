import './chatOnline.scss';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../axios';

const ChatOnline = ({ currentId, setCurrentChat, addConvo }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await makeRequest.get('/newconvos');
      setFriends(res.data);
    };
    getFriends();
  }, []);

  const removeFriend = (id) => {
    setFriends(friends.filter((friend) => friend.userId !== id));
  };

  const handleClick = async (user) => {
    const convo = {
      senderId: currentId,
      receiverId: user.userId,
    };

    try {
      const res = await makeRequest.post('/conversations', convo);
      addConvo(res.data);
      setCurrentChat(res.data);
      removeFriend(res.data.receiverId);
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
