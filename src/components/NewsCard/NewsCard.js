import React from "react";
import noPhoto from "../../images/card/no-foto.png";
import { useLocation } from "react-router-dom";

function NewsCard(props) {
  let location = useLocation();
  const [isSaved, setIsSaved] = React.useState(false);

  const card = props.newsCard;

  const date = new Date(card.publishedAt).toLocaleString("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function handleSaveButton() {
    if (!isSaved) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }

  function handleClickDelete() {}

  return (
    <section className="newscard">
      <div className="newscard__item">
        <div className="newscard__header">
          <button
            className={`newscard__keyword ${
              location.pathname === "/saved-news" &&
              "newscard__keyword_status_enabled"
            }`}
          >
            Природа
          </button>
          <button
            className={`newscard__delete-button ${
              location.pathname === "/saved-news" &&
              "newscard__delete-button_status_enabled"
            }`}
            onClick={handleClickDelete}
          ></button>

          <button
            className={`newscard__save-button ${
              location.pathname === "/" &&
              "newscard__save-button_status_enabled "
            } ${isSaved && "newscard__save-button_status_saved"}`}
            onClick={handleSaveButton}
          ></button>

          <img
            src={card.urlToImage ? card.urlToImage : noPhoto}
            alt={card.title}
            className="newscard__img"
          />
        </div>

        <a href={card.url} target="new" className="newscard__info">
          <p className="newscard__data">{date}</p>
          <h3 className="newscard__title">{card.title}</h3>
          <p className="newscard__paragraph">{card.description}</p>
          <p className="newscard__author">{card.source.name}</p>
        </a>
      </div>
    </section>
  );
}

export default NewsCard;
