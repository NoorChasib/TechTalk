import './chat.scss';
import Conversation from '../../components/conversations/conversation';

const Chat = () => {
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
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
              
              </div>
            </div>
          </div>
          <div className="chatOnline">
            <div className="chatNoWrapper">online</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
