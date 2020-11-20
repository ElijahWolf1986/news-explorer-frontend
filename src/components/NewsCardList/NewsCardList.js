import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
  return (
    <section className="news-cardlist">
      <div className="news-cardlist-gallery">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
}

export default NewsCardList;
 