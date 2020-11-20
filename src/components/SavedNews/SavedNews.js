import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews(props) {
  return (
    <div className="savednews">
      <SavedNewsHeader />
      {/* <NewsCardList /> */}
    </div>
  );
}

export default SavedNews;
