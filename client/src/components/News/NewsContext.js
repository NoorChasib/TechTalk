import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import './News.scss';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  const options = {
    method: 'GET',
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
  };
  useEffect(() => {
    axios
      .request(options)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
