import './messenger.scss';
import Conversation from '../../components/conversations/conversation';

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="messengerFront">
        <div className="messengerContainer">
          <div className="messengerMenu">
            <div className="messengerNoWrapper">
              <input
                placeholder="search for friends"
                className="messengerMenuInput"
              />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>
          <div className="messengerBox">
            <div className="messengerBoxWrapper">
              <div className="messengerBoxTop"></div>
            </div>
          </div>
          <div className="messengerOnline">
            <div className="messengerNoWrapper">online</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
