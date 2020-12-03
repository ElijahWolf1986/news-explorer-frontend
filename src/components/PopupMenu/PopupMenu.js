import React from "react";
import { useHistory, Link } from "react-router-dom";

function PopupMenu(props) {
  const history = useHistory();
  const turnToMain = () => {
    history.push("/");
  };

  const handleLink = () => {
    props.onClosePopupMenu(false);
  };

  const signinButton = () => {
    if (!props.loggedIn) {
      props.onOpenLogin(true);
    } else {
      props.onSignOut(true);
      history.push("/");
    }
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
        <Link
          to="/"
          className="popup-menu__link popup-menu__link_status_enabled"
          onClick={handleLink}
        >
          {" "}
          Главная{" "}
        </Link>

        <Link
          to="/saved-news"
          className={`popup-menu__link ${
            props.loggedIn && "popup-menu__link_status_enabled"
          }`}
          onClick={handleLink}
        >
          {" "}
          Сохраненные статьи{" "}
        </Link>

        <button className="popup-menu__button" onClick={signinButton}>
          {props.loggedIn ? props.userName : "Авторизоваться"}
          <svg
            className={`nav__svg ${props.loggedIn && "nav__svg_state_active"}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default PopupMenu;
