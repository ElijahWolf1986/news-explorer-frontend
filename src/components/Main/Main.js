import React from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchForm from "../SearchForm/SearchForm";
import NewsApi from "../../utils/NewsApi";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import { url, update, size, apiKey } from "../../utils/Utils";

function Main(props) {
  const [newsCards, setNewsCards] = React.useState([]);
  const [totalResult, setTotalResult] = React.useState(undefined);
  const [isPreloader, setIsPreloader] = React.useState(false);

  function handleUpdateKeyword(onUpdateKeyword) {
    const newsApi = new NewsApi(url, onUpdateKeyword, update, size, apiKey);
    setIsPreloader(true);
    setTotalResult(undefined);
    setNewsCards([]);
    newsApi
      .getNewsCards()
      .then((res) => {
        setTotalResult(res.totalResults);
        setNewsCards(res.articles);
        setIsPreloader(false);
      })
      .catch((err) => {
        console.log(`Ошибка получения данных о пользователе... ${err}`);
      });
  }

  return (
    <div className="main">
      <main className="main__cover">
        <SearchForm onUpdateKeyword={handleUpdateKeyword} />
      </main>
      <Preloader isPreloader={isPreloader} />
      <NewsCardList newsCards={newsCards} totalResult={totalResult} />
      <About />
    </div>
  );
}

export default Main;
