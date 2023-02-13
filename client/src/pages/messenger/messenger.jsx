import './messenger.scss';
import Conversation from '../../components/conversations/conversation';
import Message from '../../components/message/message';
import ChatOnline from '../../components/chatOnline/chatOnline';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios';

const Messenger = () => {
  const { currentUser } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

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

  return (
    <div className="chat">
      <div className="chatFront">
        <div className="chatContainer">
          <div className="chatMenu">
            <div className="chatNoWrapper">
              <input
                placeholder="search for friends"
                className="chatMenuInput"
              />
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
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      className="chatMessageInput"
                      placeholder="Write something..."
                    ></textarea>
                    <button className="chatSubmitButton">Send</button>
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
              <ChatOnline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
