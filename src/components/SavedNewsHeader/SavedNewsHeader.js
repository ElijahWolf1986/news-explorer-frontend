import React from "react";

function SavedNewsHeader(props) {
    return (
      <div className="saved-news-header">
          <h3 className="saved-news-header__title">Сохраненные статьи</h3>
          <div className="saved-news-header__statistic">
          <p className="saved-news-header__statistic-info">Грета, у вас 5</p>
          <p className="saved-news-header__statistic-paragraph">сохраненных статей</p>
          </div>
          <div className="saved-news-header__keywords">
          <p className="saved-news-header__keywords-paragraph">По ключевым словам:</p>
          <p className="saved-news-header__keywords-result">Природа, Тайга и 2-м другим</p>
          </div>
          
        
      </div>
    );
  }
  
  export default SavedNewsHeader;