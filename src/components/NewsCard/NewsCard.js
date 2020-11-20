import React from "react";
import testPhoto from "../../images/card/test.png";

function NewsCard(props) {
  return (
    <div className="newscard">

      <div className="newscard__header">
        <button className="newscard__keyword newscard__keyword_status_enabled">Природа</button>
        <button className="newscard__delete-button newscard__delete-button_status_enabled"></button>
        <button className="newscard__save-button"></button>
        <img
          src={testPhoto}
          alt="фото карточки тестовое"
          className="newscard__img"
        />
      </div>

      <div className="newscard__info">
        <p className="newscard__data">2 августа, 2019</p>  
        <h3 className="newscard__title">Национальное достояние &ndash; парки Национальное достояние</h3>
        <p className="newscard__paragraph">
          В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
          складываться система национальных парков – охраняемых территорий, где
          и сегодня каждый может приобщиться к природе.  сегодня каждый может приобщиться к природе
        </p>
        <p className="newscard__author">ДЗЕН</p>
      </div>
      
    </div>
  );
}

export default NewsCard;
