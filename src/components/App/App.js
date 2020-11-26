import React from "react";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Login from "../Login";
import Register from "../Register";
import InfoTooltip from "../InfoTooltip";
import PopupMenu from "../PopupMenu/PopupMenu";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(true); //временно тру для тестирования верстки без api auth
  const [isOpenLogin, setIsOpenLogin] = React.useState(false);
  const [isResetForm, setIsResetForm] = React.useState(false);
  const [isOpenRegister, setIsOpenRegister] = React.useState(false);
  const [isOpenPopupInfo, setIsOpenPopupInfo] = React.useState(false);
  const [isOpenPopupMenu, setIsOpenPopupMenu] = React.useState(false);
  const [errorServerMessage, setErrorServerMessage] = React.useState("");

  function closeAllPopups() {
    setIsOpenLogin(false);
    setIsOpenRegister(false);
    setIsOpenPopupInfo(false);
    setIsResetForm(true);
    setIsOpenPopupMenu(false);
  }

  const handleLogin = (email, password) => {
    //тут будет обработака запроса авторизации
    setErrorServerMessage("Удача, но apiAuth еще не подключен :)");
    setTimeout(() => {
      setErrorServerMessage("");
    }, 2000);
  };

  const handleRegister = (email, password, name) => {
    //тут будет обработака запроса на регистрацию
    setErrorServerMessage("Удача, но apiAuth еще не подключен :)");
    setIsOpenPopupInfo(true);
    setIsOpenRegister(false);
  };

  function handleOpenLogin() {
    setIsOpenLogin(true);
    setErrorServerMessage("");
  }

  function handleOpenPopupMenu() {
    setIsOpenPopupMenu(true);
  }

  function handleClosePopupMenu() {
    setIsOpenPopupMenu(false);
  }

  function handleRedirect(evt) {
    evt.preventDefault();
    if (isOpenPopupInfo) {
      setIsOpenLogin(true);
      setIsOpenPopupInfo(false);
      setErrorServerMessage("");
    } else {
      if (isOpenLogin) {
        setIsOpenLogin(false);
        setIsOpenRegister(true);
        setErrorServerMessage("");
      } else {
        setIsOpenLogin(true);
        setIsOpenRegister(false);
        setErrorServerMessage("");
      }
    }
  }

  return (
    <Router history={history}>
      <div className="page">
        <Header
          loggedIn={loggedIn}
          onOpenLogin={handleOpenLogin}
          onClose={closeAllPopups}
          onOpenPopupMenu={handleOpenPopupMenu}
          isOpenPopupMenu={isOpenPopupMenu}
          isOpenLogin={isOpenLogin}
          isOpenRegister={isOpenRegister}
          isOpenPopupInfo={isOpenPopupInfo}
        />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
        <Login
          isOpen={isOpenLogin}
          onResetForm={isResetForm}
          onClose={closeAllPopups}
          onLogin={handleLogin}
          onServerErrorMessage={errorServerMessage}
          redirect={handleRedirect}
        />
        <Register
          isOpen={isOpenRegister}
          onResetForm={isResetForm}
          onClose={closeAllPopups}
          onRegister={handleRegister}
          onServerErrorMessage={errorServerMessage}
          redirect={handleRedirect}
        />

        <PopupMenu
          isOpenPopupMenu={isOpenPopupMenu}
          onClose={closeAllPopups}
          loggedIn={loggedIn}
          onOpenLogin={handleOpenLogin}
          onOpenPopupMenu={handleOpenPopupMenu}
          onClosePopupMenu={handleClosePopupMenu}
        />

        <InfoTooltip
          isOpen={isOpenPopupInfo}
          onClose={closeAllPopups}
          redirect={handleRedirect}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
 