import './chat.scss';
import Conversation from '../../components/conversations/conversation';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatFront">
        <div className="chatContainer">
          <div className="chatMenu">
            <div className="chatWrapper">
              <input
                placeholder="search for friends"
                className="chatMenuInput"
              />
              <Conversation/>
            </div>
          </div>
          <div className="chatBox">
            <div className="chatWrapper">box</div>
          </div>
          <div className="chatOnline">
            <div className="chatWrapper">online</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
