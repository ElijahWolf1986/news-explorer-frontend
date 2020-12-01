import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews(props) {
  return (
    <div className="savednews">
      <SavedNewsHeader
        userName={props.userName}
        articlesNumber={props.savedNewsCards.length}
        newsCards={props.savedNewsCards}
      />
      <NewsCardList
        newsCards={props.savedNewsCards}
        isSearchResult={true}
        onDeleteArticles={props.onDeleteArticles}
      />
    </div>
  );
}

export default SavedNews;
