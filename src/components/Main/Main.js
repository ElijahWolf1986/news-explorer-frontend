import React from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchForm from "../SearchForm/SearchForm";
import NewsApi from "../../utils/NewsApi";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import { url, update, size, apiKey } from "../../utils/Utils";
import ErrorNewsApi from "../Errors/ErrorsNewsApi/ErrorNewsApi";

function Main(props) {
  const [newsCards, setNewsCards] = React.useState([]);
  const [totalResult, setTotalResult] = React.useState(undefined);
  const [isPreloader, setIsPreloader] = React.useState(false);
  const [isErrorServer, setisErrorServer] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isSearchResult, setIsSearchResult] = React.useState(false);
  const [showItems, setshowItems] = React.useState(3);

  function handleShowMeMore() {
    setshowItems(showItems + 3);
  }

  function handleUpdateKeyword(onUpdateKeyword) {
    const newsApi = new NewsApi(url, onUpdateKeyword, update, size, apiKey);
    setisErrorServer(false);
    setIsPreloader(true);
    setTotalResult(undefined);
    setNewsCards([]);
    setshowItems(3);
    newsApi
      .getNewsCards()
      .then((res) => {
        setIsSearchResult(true);
        setTotalResult(res.totalResults);
        setNewsCards(res.articles);
        setIsPreloader(false);
      })
      .catch((err) => {
        if (err === 429) {
          setIsPreloader(false);
          setErrorMessage(
            `Статус ${err} Слишком много запросов для бесплатной версии доступно 50 шт каждые 12 часов`
          );
          setisErrorServer(true);
        } else {
          setErrorMessage(`Статус ${err} Ошибка сервера`);
        }
      });
  }

  return (
    <div className="main">
      <main className="main__cover">
        <SearchForm onUpdateKeyword={handleUpdateKeyword} />
      </main>
      <Preloader isPreloader={isPreloader} />
      <ErrorNewsApi isErrorServer={isErrorServer} errorMessage={errorMessage} />
      <NewsCardList newsCards={newsCards} totalResult={totalResult} isSearchResult={isSearchResult} showItems={showItems} handleShowMeMore={handleShowMeMore} />
      <About />
    </div>
  );
}

export default Main;
