import React from "react";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  const turnToMain = () => {
    history.push("/");
  };
  const turnToSavedNews = () => {
    history.push("/saved-news");
  };
  const signinButton = () => {
    history.push("/signin");
  };

  return (
    <header className="header">
      <h1 className="header__title" onClick={turnToMain}>
        NewsExplorer
      </h1>
      <nav className="header__nav">
        <ui className="header__links">
          <li onClick={turnToMain} className="header__link">
            Главная
          </li>
          <li
            onClick={turnToSavedNews}
            className={`${
              props.loggedIn
                ? "header__link"
                : "header__link_status_disable"
            }`}
          >
            Сохраненные статьи
          </li>
          <button className="header__log-button" onClick={signinButton}>
            {" "}
            Авторизоваться{" "}
          </button>
        </ui>
      </nav>
    </header>
  );
}

export default Header;
