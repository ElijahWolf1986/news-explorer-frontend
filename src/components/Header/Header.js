import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  let location = useLocation();
  const history = useHistory();
  const turnToMain = () => {
    history.push("/");
  };
  return (
    <header
      className={`header ${
        location.pathname === "/saved-news" && "header_status_account"
      }`}
    >
      <h1 className="header__title" onClick={turnToMain}>
        NewsExplorer
      </h1>
      <Navigation loggedIn={props.loggedIn} />
    </header>
  );
}

export default Header;
