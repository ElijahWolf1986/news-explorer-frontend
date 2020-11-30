import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function Navigation(props) {
  // const [authState, setAuthState] = React.useState(false); // временное решение для кнопеи авторизоваться
  let location = useLocation();
  const history = useHistory();
  const turnToMain = () => {
    history.push("/");
  };
  const turnToSavedNews = () => {
    history.push("/saved-news");
  };
  
  const signinButton = () => {
    //Клевая кнопка при залогиненном пользователе она очищает токен и переходит на /
    //а при незалогиненном она вызывает попап авторизации
    if (!props.loggedIn) {
      props.onOpenLogin(true);
    } else {
      props.onSignOut(true);
    }
  };

  function handleToogleMenu() {
    props.onOpenPopupMenu(true);
  }

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li
          onClick={turnToMain}
          className={`nav__link nav__link_state_enabled ${
            location.pathname === "/" && "nav__link_status_active"
          }`}
        >
          Главная
        </li>
        <li
          onClick={turnToSavedNews}
          className={`nav__link ${props.loggedIn && "nav__link_state_enabled"} ${
            location.pathname === "/saved-news" && "nav__link_status_active"
          }`}
        >
          Сохраненные статьи
        </li>


        <button className="nav__log-button" onClick={signinButton}>
          {" "}
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
              className={
                location.pathname === "/" ? "nav__svg-border_state_account" : ""
              }
              d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
              fill="#1A1B22"
            />
          </svg>
        </button>
      </ul>
      <div
        className={`nav__toogle-menu ${
          location.pathname === "/" && "nav__toogle-menu_state_white"
        } ${
          (props.isOpenPopupMenu ||
            props.isOpenLogin ||
            props.isOpenRegister ||
            props.isOpenPopupInfo) &&
          "nav__toogle-menu_state_hidden"
        }`}
        onClick={handleToogleMenu}
      ></div>
    </nav>
  );
}

export default Navigation;
