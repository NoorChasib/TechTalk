import './message.scss';

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum similique excepturi sint quam molestias sit temporibus qui voluptas quod. Officia laboriosam doloremque ad facere, illum tempora aspernatur blanditiis rerum.</p>
      </div>
      <div className="messageBottom">1 Hour ago</div>
    </div>
  );
};

export default Message;
