import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import moment from "moment"; 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient(); 

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <input type="text" placeholder="write a comment" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <button onClick={handleClick}>Post</button>
      </div>
      {isLoading 
      ? "loading" 
      : data.map((comment) => (
        <div className="comment">
          <img src={'/upload/' + currentUser.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
