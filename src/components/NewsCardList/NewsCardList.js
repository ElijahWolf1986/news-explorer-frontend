import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

function NewsCardList(props) {
  const cards = props.newsCards;

  return (
    <section className="news-cardlist">
      <div className="news-cardlist-gallery">
        {props.totalResult === 0 ? (
          <NotFound />
        ) : (
          cards.map((item, id) => {
            return <NewsCard newsCard={item} key={id} />;
          })
        )}

        {/* <button type="magic" count="3" hide-if-last="true" libs="no-thanks">Показать еще</button> */}
      </div>
    </section>
  );
}

export default NewsCardList;
