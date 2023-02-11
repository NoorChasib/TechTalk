import './message.scss';

const Message = () => {
  return (
    <div className="message">
      <div className="messageTop">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="messageImg"
        />
        <p className="messageText">Hello World</p>
      </div>
      <div className="messageBottom">Hello World</div>
    </div>
  );
};

export default Message;
