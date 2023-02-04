export default Home;

import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home;