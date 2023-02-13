import './conversation.scss';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../axios';

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId =
      conversation.senderId === currentUser.id
        ? conversation.receiverId
        : conversation.senderId;

    const getUser = async () => {
      try {
        const res = await makeRequest.get('/users/find/' + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg "
        src={
          user?.profilePic
            ? '/upload/' + user.profilePic
            : '../../../public/upload/1675897758980628298_anonym_avatar_default_head_person_icon.png'
        }
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversation;
