import { useEffect, useState } from "react"; 
import axios from "axios"; 
import './News.scss'

function NewsArticle({ storyId }) {  
  const [info, setInfo] = useState();

  console.log('storyId', storyId) 
  console.log('info', info)

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
      <span>Link</span>
      <span className="news_url"><a href={info.url}>{info.url}</a></span> 
      </div> 
      <div className="news_format">  
      <span>Title</span>
      <span className="news_title">{info.title}</span>  
      </div> 
      <div className="news_format">  
      <span>Score</span>
      <span className="news_score">{info.score}</span> 
      </div>  
      <div className="news_format">  
      <span>Author</span>
      <span className="news_by">{info.by}</span>  
      </div> 

      </>
}
    </div> 
    
  );
}
export default NewsArticle;