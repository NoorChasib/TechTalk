import React, { useContext } from 'react';
import { NewsContext } from './NewsContext';
import NewsArticle from './NewsArticle';
import './News.scss';

function News(props) {
  const { data: stories } = useContext(NewsContext);

  return (
    <div>
      <div className="all__news">
        {stories
          ? stories
              .slice(0, 3)
              .map((story, i) => <NewsArticle storyId={story} key={i} />)
          : 'Loading'}
      </div>
    </div>
  );
}

export default News;
