import React from "react";
import noPhoto from "../../images/card/no-foto.png";
import { useLocation } from "react-router-dom";

function NewsCard(props) {
  let location = useLocation();
  const [isCardSaved, setIsCardSaved] = React.useState(false);
  const [thisArticleId, setThisArticleId] = React.useState("");
  const card = props.newsCard;
  const date = new Date(card.publishedAt).toLocaleString("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

//  console.log(date);

  const cardDate = new Date(card.date).toLocaleString("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  function handleClickDelete() {
    props
      .onDeleteArticles(thisArticleId)
      .then((data) => {
        setIsCardSaved(false);
        console.log(`Карта # ${thisArticleId} Удалена`);
      })
      .catch((err) => console.log(err.message));
  }

  function handleClickDelete2() {
    props
      .onDeleteArticles(card._id)
      .then((data) => {
        setIsCardSaved(false);
        console.log(`Карта # ${card._id} Удалена`);
      })
      .catch((err) => console.log(err.message));
  }


  function handleSaveButton() {
    if (props.loggedIn) {
      if (!isCardSaved) {
        props
          .onSaveNewsArticle(
            props.keyword,
            card.title,
            card.description,
            card.publishedAt,
            card.source.name,
            card.url,
            card.urlToImage
          )
          .then((data) => {
            setThisArticleId(data._id);
            setIsCardSaved(true);
            console.log(`Карта # ${data._id} Сохранена`);
          })
          .catch((err) => console.log(err.message));
      } else {
        // handleClickDelete();
      }
    }
  }

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
            {card.keyword}

          </button>
          <button
            className={`newscard__delete-button ${
              location.pathname === "/saved-news" &&
              "newscard__delete-button_status_enabled"
            }`}
            onClick={handleClickDelete2}
          ></button>
          <button
            className={`newscard__save-button ${
              location.pathname === "/" &&
              "newscard__save-button_status_enabled "
            } ${isCardSaved && "newscard__save-button_status_saved"} ${
              !props.loggedIn && "newscard__delete-button_state_logout"
            }`}
            onClick={handleSaveButton}
          ></button>
          <img
            src={card.urlToImage || card.image ? card.urlToImage || card.image : noPhoto}
            alt={card.title}
            className="newscard__img"
          />
        </div>
        <a href={card.url} target="new" className="newscard__info">
          <p className="newscard__data">{date !== 'Invalid Date' ? date : cardDate}</p>
          <h3 className="newscard__title">{card.title}</h3>
          <p className="newscard__paragraph">{card.description || card.text}</p>
          <p className="newscard__author">{card.source.name || card.source}</p>
        </a>
      </div>
    </section>
  );
}

export default NewsCard;
