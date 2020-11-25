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
      <div className="header__components">
        <h1 className="header__title" onClick={turnToMain}>
          NewsExplorer
        </h1>
        <Navigation
          loggedIn={props.loggedIn}
          onOpenLogin={props.onOpenLogin}
          onOpenPopupInfo={props.onOpenPopupInfo}
          onOpenPopupMenu={props.onOpenPopupMenu}
          isOpenPopupMenu={props.isOpenPopupMenu}
          isOpenRegister={props.isOpenRegister}
          isOpenLogin={props.isOpenLogin}
          isOpenPopupInfo={props.isOpenPopupInfo}
        />
      </div>
    </header>
  );
}

export default Header;
