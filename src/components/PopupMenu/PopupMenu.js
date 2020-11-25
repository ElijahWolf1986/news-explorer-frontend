import React from "react";
import { useHistory, Link } from "react-router-dom";

function PopupMenu(props) {
  const history = useHistory();
  const turnToMain = () => {
    history.push("/");
  };
  const turnToSavedNews = () => {
    history.push("/saved-news");
  };

  const handleLink = () => {
    props.onClosePopupMenu(false);
  };

  const signinButton = () => {
    // временное решение для кнопеи авторизоваться, для просмотра сверстанных вариантов
    // history.push("/signin");
    props.onOpenLogin(true);
    props.onClosePopupMenu(false);
  };

  return (
    <section
      className={`popup-menu ${
        props.isOpenPopupMenu && "popup-menu_state_opened"
      }`}
    >
      <div className="popup-menu__overlay" onClick={props.onClose}>
        {" "}
      </div>
      <div className="popup-menu__header">
        <button
          type="button"
          className="popup-menu__close-icon"
          onClick={props.onClose}
        ></button>
        <h1 className="popup-menu__title" onClick={turnToMain}>
          NewsExplorer
        </h1>
      </div>
      <div className="popup-menu__wrapper">
        <Link to="/" className="popup-menu__link" onClick={handleLink}>
          {" "}
          Главная{" "}
        </Link>
        <Link
          to="/saved-news"
          className="popup-menu__link"
          onClick={handleLink}
        >
          {" "}
          Сохраненные статьи{" "}
        </Link>
        <button className="popup-menu__button" onClick={signinButton}>
          Авторизоваться
        </button>
      </div>
    </section>
  );
}

export default PopupMenu;
