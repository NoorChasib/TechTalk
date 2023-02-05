import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "pain",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png",
    },
    {
      id: 2,
      desc: "find God",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-800x450.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Post</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
