import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NotFound from "../NotFound/NotFound";
import { useLocation } from "react-router-dom";

function NewsCardList(props) {
  const cards = props.newsCards;
  let location = useLocation();

  return (
    <section
      className={`news-cardlist ${
        props.isSearchResult && "news-cardlist_state_enabled"
      }`}
    >
      <h2
        className={`news-cardlist__title ${
          location.pathname === "/" && "news-cardlist__title_state_enabled"
        }`}
      >
        Результаты поиска
      </h2>
      <div className="news-cardlist__gallery">
        {props.totalResult === 0 ? (
          <NotFound />
        ) : (
          cards
            .map((item, id) => {
              return <NewsCard newsCard={item} key={id} />;
            })
            .slice(0, props.showItems)
        )}
      </div>
      <div className="news-cardlist__button-wrapper">
        <button
          type="button"
          className={`news-cardlist__button-show-me-more ${
            props.totalResult > 3 &&
            "news-cardlist__button-show-me-more_state_enabled"
          }`}
          onClick={props.handleShowMeMore}
        >
          Показать еще
        </button>
      </div>
    </section>
  );
}

export default NewsCardList;
