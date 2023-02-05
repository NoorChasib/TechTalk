import Post from "../post/post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-800x450.jpg",
      desc: "He really blew a 50 billion lead loool",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-800x450.jpg",
      desc: "Finally back on top.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;