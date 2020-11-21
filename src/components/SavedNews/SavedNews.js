import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { testArticles } from "../../utils/ForTesting";

function SavedNews(props) {
  const [isSearchResult, setIsSearchResult] = React.useState(true);
  return (
    <div className="savednews">
      <SavedNewsHeader />
      <NewsCardList newsCards={testArticles.articles} isSearchResult={isSearchResult} />
    </div>
  );
}

export default SavedNews;
