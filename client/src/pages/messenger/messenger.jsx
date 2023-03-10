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
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const { currentUser } = useContext(AuthContext);
  const scrollRef = useRef();
  const [conversationsLoaded, setConversationsLoaded] = useState(false);
  const [messagesLoaded, setMessagesLoaded] = useState(false);

  console.log('currentChat', currentChat);

  const getMessages = async () => {
    try {
      const res = await makeRequest.get('/messages/' + 2);
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', (data) => {
      getMessages();
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.receiverId === arrivalMessage.sender &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit('addUser', currentUser.id);
    socket.current.on('getUsers', (users) => {});
  }, [currentUser]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await makeRequest.get('/conversations/' + currentUser?.id);
        setConversations(res.data);
        setConversationsLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [currentUser.id]);

  useEffect(() => {
    if (currentChat && conversationsLoaded) {
      const getMessages = async () => {
        try {
          const res = await makeRequest.get('/messages/' + currentChat.id);
          setMessages(res.data);
          setMessagesLoaded(true);
        } catch (err) {
          console.log(err);
        }
      };
      getMessages();
    }
  }, [currentChat, conversationsLoaded]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const updateConvo = (newConversation) => {
    setConversations([...conversations, newConversation]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentChat.id) {
      const message = {
        sender: currentUser.id,
        text: newMessage,
        conversationId: currentChat.id,
      };

      const receiverId =
        currentUser.id === currentChat.receiverId
          ? currentChat.senderId
          : currentChat.receiverId;

      socket.current.emit('sendMessage', {
        senderId: currentUser.id,
        receiverId: receiverId,
        text: newMessage,
      });

      try {
        const res = await makeRequest.post('/messages', message);

        setMessages((prev) => [...prev, res.data]);
        setNewMessage('');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="chat">
      <div className="chatFront">
        <div className="chatContainer">
          <div className="chatMenu">
            <div className="chatNoWrapper">
              <span className="sideTitle">Conversations</span>
              {conversations.map((c) => (
                <div
                  onClick={() => {
                    setCurrentChat(c);
                  }}
                >
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
              <span className="sideTitle">Friends</span>
              <ChatOnline
                currentId={currentUser.id}
                setCurrentChat={setCurrentChat}
                addConvo={updateConvo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
