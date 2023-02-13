import './messenger.scss';
import Conversation from '../../components/conversations/conversation';
import Message from '../../components/message/message';
import ChatOnline from '../../components/chatOnline/chatOnline';
import { useContext, useEffect, useState, useRef } from 'react';
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios';
import { io } from 'socket.io-client';

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socket = useRef(io('ws://localhost:8900'));
  const { currentUser } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current.emit('addUser', currentUser.id);
    socket.current.on('getUsers', (users) => {
      console.log(users);
    });
  }, [currentUser]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await makeRequest.get('/conversations/' + currentUser.id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [currentUser.id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await makeRequest.get('/messages/' + currentChat?.id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: currentUser.id,
      text: newMessage,
      conversationId: currentChat.id,
    };

    try {
      const res = await makeRequest.post('/messages', message);
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chat">
      <div className="chatFront">
        <div className="chatContainer">
          <div className="chatMenu">
            <div className="chatNoWrapper">
              <span className="sideTitle">Friends</span>
              {conversations.map((c) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation conversation={c} currentUser={currentUser} />
                </div>
              ))}
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              {currentChat ? (
                <>
                  <div className="chatBoxTop">
                    {messages.map((m) => (
                      <div ref={scrollRef} key={m.id}>
                        <Message
                          message={m}
                          own={m.sender === currentUser.id}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      className="chatMessageInput"
                      placeholder="Write something..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></textarea>
                    <button className="chatSubmitButton" onClick={handleSubmit}>
                      Send
                    </button>
                  </div>{' '}
                </>
              ) : (
                <span className="noConversationText">
                  Open a conversation to start a chat
                </span>
              )}
            </div>
          </div>
          <div className="chatOnline">
            <div className="chatNoWrapper">
              <span className="sideTitle">Online</span>
              <ChatOnline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
