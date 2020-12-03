import React from "react";
import { sortingWords, ending } from "../../utils/ArrayHelper";

function SavedNewsHeader(props) {
  const sortedKeywordsArray = sortingWords(props.newsCards);
  const currentEnding = ending(sortedKeywordsArray.length - 2);

  return (
    <div className="saved-news-header">
      <h3 className="saved-news-header__title">Сохраненные статьи</h3>
      <div className="saved-news-header__statistic">
        <p className="saved-news-header__statistic-info">
          {props.userName}, у вас {props.articlesNumber}{" "}
        </p>
        <p className="saved-news-header__statistic-paragraph">
          сохраненных статей
        </p>
      </div>
      <div className="saved-news-header__keywords">
        <p className="saved-news-header__keywords-paragraph">
          По ключевым словам:
        </p>
        <p className="saved-news-header__keywords-result">
          {sortedKeywordsArray.length === 0 && `Ключевых слов нет`}
          {sortedKeywordsArray.length > 0 && `${sortedKeywordsArray[0]},`}
        </p>
        <p className="saved-news-header__keywords-result">
          {sortedKeywordsArray[1]}
        </p>
        <p className="saved-news-header__keywords-result">
          {sortedKeywordsArray.length === 2 && " "}
          {sortedKeywordsArray.length === 3 && `${sortedKeywordsArray[2]}`}
          {sortedKeywordsArray.length > 3 &&
            `и ${sortedKeywordsArray.length - 2}-${currentEnding} другим`}
        </p>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
