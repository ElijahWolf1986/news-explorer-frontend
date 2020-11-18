import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
    return (
      <div className="news-cardlist">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />

        
      </div>
    );
  }
  
  export default NewsCardList;
  