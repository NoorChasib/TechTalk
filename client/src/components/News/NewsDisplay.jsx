// import './News.scss' 
import './NewsDisplay.scss' 

import NewsPage from "./NewsPage"; 
import { NewsContextProvider } from '../News/NewsContext';


const Chat = () => {
  return (
    <div className="newsDisplay">
      <div className="newsFront">
        <div className="newsContainer"> 
        <h1 className='newsTitle'>Tech News</h1>

          <div className='newsBox'>
          <NewsContextProvider>
              <NewsPage />
            </NewsContextProvider>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;