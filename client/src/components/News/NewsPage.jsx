import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle"; 
// import './News.scss'  
import './NewsDisplay.scss' 



function NewsPage(props) {
  const { data: stories } = useContext(NewsContext);

  return (
    <div>
      <div className="one_news">
        {stories
          ? stories.slice(0, 48).map((story, i) => (
              <NewsArticle storyId={story} key={i} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default NewsPage;
