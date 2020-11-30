import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
// import { testArticles } from "../../utils/ForTesting";

function SavedNews(props) {
  const [isSearchResult, setIsSearchResult] = React.useState(true);
  console.log(props.savedNewsCards)
  return (
    <div className="savednews">
      <SavedNewsHeader />
      <NewsCardList newsCards={props.savedNewsCards} isSearchResult={isSearchResult}
      onDeleteArticles={props.onDeleteArticles}
      />
    </div>
  );
}

export default SavedNews;
 