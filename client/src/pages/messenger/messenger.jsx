import './messenger.scss';
import Conversation from '../../components/conversations/conversation';
import Message from '../../components/message/message';
import ChatOnline from '../../components/chatOnline/chatOnline';

const Messenger = () => {
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
              </div>
            </div>
          </div>
          <div className="chatOnline">
            <div className="chatNoWrapper">
              <ChatOnline/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
