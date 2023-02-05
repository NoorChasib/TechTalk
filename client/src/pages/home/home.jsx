import Stories from "../../components/stories/stories"
import Posts from "../../components/posts/posts"
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
