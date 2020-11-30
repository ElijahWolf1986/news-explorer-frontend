import React from "react";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Login from "../Login";
import Register from "../Register";
import InfoTooltip from "../InfoTooltip";
import PopupMenu from "../PopupMenu/PopupMenu";
import * as MainApi from "../../utils/MainApi";
import { Url, Update, Size, ApiKey } from "../../utils/Utils";
import NewsApi from "../../utils/NewsApi";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");

  //Стейты для работы popup-ов
  const [isOpenLogin, setIsOpenLogin] = React.useState(false);
  const [isResetForm, setIsResetForm] = React.useState(false);
  const [isOpenRegister, setIsOpenRegister] = React.useState(false);
  const [isOpenPopupInfo, setIsOpenPopupInfo] = React.useState(false);
  const [isOpenPopupMenu, setIsOpenPopupMenu] = React.useState(false);
  const [errorServerMessage, setErrorServerMessage] = React.useState(""); //ошибка после ответа сервера
  //********************************** */

  //Стейты для работы страницы Main и NewsApi
  const [newsCards, setNewsCards] = React.useState([]);
  const [totalResult, setTotalResult] = React.useState(undefined);
  const [isPreloader, setIsPreloader] = React.useState(false);
  const [isErrorServer, setisErrorServer] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isSearchResult, setIsSearchResult] = React.useState(false);
  const [showItems, setshowItems] = React.useState(3);
  const [keyword, setKeyword] = React.useState("");
  //********************************** */

  //Стейты для работы страницы SavedNews 
  const [savedNewsCards, setSavedNewsCards] = React.useState([]);


  //********************************** */

  //Функции для работы страницы Main и NewsApi
  function handleShowMeMore() {
    setshowItems(showItems + 3);
    setTotalResult(totalResult - 3);
  }

  function handleUpdateKeyword(onUpdateKeyword) {
    const newsApi = new NewsApi(Url, onUpdateKeyword, Update, Size, ApiKey);
    setisErrorServer(false);
    setIsPreloader(true);
    setTotalResult(undefined);
    setNewsCards([]);
    setshowItems(3);
    setKeyword(onUpdateKeyword);
    localStorage.keyword = keyword;
    // console.log(keyword);
    newsApi
      .getNewsCards()
      .then((res) => {
        setIsSearchResult(true);
        setTotalResult(res.totalResults);
        setNewsCards(res.articles);
        setIsPreloader(false);
        // console.log(newsCards)
      })
      .catch((err) => {
        if (err === 429) {
          setIsPreloader(false);
          setErrorMessage(
            `Статус ${err} Слишком много запросов для бесплатной версии доступно 50 шт каждые 12 часов`
          );
          setisErrorServer(true);
        } else {
          setErrorMessage(
            `Статус ${err} Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен`
          );
        }
      });
  }
  //********************************** */

  //Функции для работы popup-ов

  function closeAllPopups() {
    setIsOpenLogin(false);
    setIsOpenRegister(false);
    setIsOpenPopupInfo(false);
    setIsResetForm(true);
    setIsOpenPopupMenu(false);
  }

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

  //********************************** */

  function getUsersArticles() {
    let jwt = localStorage.getItem("jwt");
    MainApi
    .getArticles(jwt)
    .then((res) => {
      // console.log(res);
      setSavedNewsCards(res.data);
      // console.log(savedNewsCards);

    })
  }

  //Функции для Авторизации и Регистрации и все что с этим связано

  function onSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    localStorage.loggedIn = loggedIn;
    setCurrentUser("");
    history.push("/");
  }

  function getUserInfo() {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getUserInfo(jwt)
        .then((res) => {
          setCurrentUser(res.name);
        })
        .catch((err) => {
          setCurrentUser("NoName");
        });
    }
  }

  const tokenCheck = () => {
    //Проверка на наличие токена в локальном хранилище
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      setLoggedIn(true);
      getUserInfo();
      history.push("/");
    }
  };

  const onLogin = (email, password) => {
    ////тут обработака запроса авторизации
    MainApi.authorize(email, password)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          closeAllPopups();
          localStorage.loggedIn = loggedIn;
          getUserInfo();
          getUsersArticles();
        }
      })
      .catch((err) => {
        if (err.status === 401 || err.status === 403) {
          setErrorServerMessage("Неверный логин или пароль");
        } else {
          setErrorServerMessage(err.statusText);
        }
        setTimeout(() => {
          setErrorServerMessage("");
        }, 2000);
      });
  };

  const onRegister = (email, password, name) => {
    ////тут обработака запроса регистрации
    MainApi.register(email, password, name)
      .then((data) => {
        if (data) {
          setIsOpenPopupInfo(true);
          setIsOpenRegister(false);
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrorServerMessage("Пользователь с таким email уже существует");
        } else {
          setErrorServerMessage(err.statusText);
        }
        setTimeout(() => {
          setErrorServerMessage("");
        }, 2000);
      });
  };

  //********************************** */

  //Функции Сохранения и удаления статей

  function onSaveNewsArticle(keyword, title, text, date, source, link, image) {
    let jwt = localStorage.getItem("jwt");
    return MainApi.createArticles(
      jwt,
      keyword,
      title,
      text,
      date,
      source,
      link,
      image
    );
  }

  function onDeleteArticles(articleId) {
    let jwt = localStorage.getItem("jwt");
    return MainApi.deleteArticles(jwt, articleId);
  }

  //********************************** */

  React.useEffect(() => {
    //Реализует функционал, когда пользователь случайно закрыл страницу или перезагрузил ее, то он при возврате все равно остается залогиненным
    //до тех пор пока не воспользуется кнопкой логоут или не просрочится токен
    tokenCheck();
    getUsersArticles()

  }, []);

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
          userName={currentUser}
          onSignOut={onSignOut}
          keyword={keyword}
        />

        <Switch>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
              onSaveNewsArticle={onSaveNewsArticle}
              onDeleteArticles={onDeleteArticles}
              onUpdateKeyword={handleUpdateKeyword}
              isPreloader={isPreloader}
              isErrorServer={isErrorServer}
              errorMessage={errorMessage}
              newsCards={newsCards}
              totalResult={totalResult}
              isSearchResult={isSearchResult}
              showItems={showItems}
              handleShowMeMore={handleShowMeMore}
              keyword={keyword}
            />
          </Route>

          <CurrentUserContext.Provider value={currentUser}>
            <ProtectedRoute
              path="/saved-news"
              loggedIn={loggedIn}
              savedNewsCards={savedNewsCards}
              keyword={keyword}
              onDeleteArticles={onDeleteArticles}
              component={SavedNews}
            />
          </CurrentUserContext.Provider>
        </Switch>
        <Login
          isOpen={isOpenLogin}
          onResetForm={isResetForm}
          onClose={closeAllPopups}
          onLogin={onLogin}
          onServerErrorMessage={errorServerMessage}
          redirect={handleRedirect}
        />
        <Register
          isOpen={isOpenRegister}
          onResetForm={isResetForm}
          onClose={closeAllPopups}
          onRegister={onRegister}
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
