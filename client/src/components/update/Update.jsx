import { useState } from "react"
import { makeRequest } from "../../axios"
import "./update.scss"
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Update = ({ setOpenUpdate, user }) =>{

  const [cover, setCover] = useState(null)
  const [profile, setProfile] = useState(null)
  const [texts, setTexts] = useState({
    name: "",
    city:"",
    website:"",
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };


  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return makeRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let coverUrl;
    let profileUrl;

    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic:profileUrl});
    setOpenUpdate(false);
  };



  return (
    <div className="update"> 
    Update 
    <form>
<input type ="file" onChange={(e) => setCover(e.target.files[0])}/> 
<input type ="file" onChange={(e) => setProfile(e.target.files[0])}/>
<input type ="text" name = "name" onChange = {handleChange}/>
<input type ="text" name = "city" onChange = {handleChange}/>
<input type ="text" name = "website" onChange = {handleChange}/>
<button onClick={handleClick}>Update</button>
    </form>
    <button onClick={()=> setOpenUpdate(false)}> X </button>
    </div>
  )
}

export default Update 

  