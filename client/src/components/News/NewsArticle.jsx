import { useEffect, useState } from "react"; 
import axios from "axios"; 
import './News.scss'

function NewsArticle({ storyId }) {  
  const [info, setInfo] = useState();



  const options = {
    method: 'GET',
    url: `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
    
  };  
  useEffect(() => {
    axios
      .request(options)
      .then((response) => setInfo(response.data))
      .catch((error) => console.log(error));
  }, []); 

  return ( 
    <div className="news"> 
    {info && 
<> 
      <div className="news_format"> 
      <span className="bold">Title</span>
      <span className="news_url"><a rel="noopener noreferrer" target="_blank" href={info.url}>{info.title} </a></span> 
      </div> 
      <div className="news_format">  
      <span className="bold">Score</span>
      <span className="news_score">{info.score}</span> 
      </div>  
      <div className="news_format">  
      <span className="bold">Author</span>
      <span className="news_by">{info.by}</span>  
      </div> 

      </>
}
    </div> 
    
  );
}
export default NewsArticle;
