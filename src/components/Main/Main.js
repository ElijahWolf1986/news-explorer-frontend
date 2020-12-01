import React from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import ErrorNewsApi from "../Errors/ErrorsNewsApi/ErrorNewsApi";

function Main(props) {
  return (
    <div className="main">
      <main className="main__cover">
        <SearchForm
          onUpdateKeyword={props.onUpdateKeyword}
          keyword={props.keyword}
          setKeyword={props.setKeyword}
        />
      </main>
      <Preloader isPreloader={props.isPreloader} />
      <ErrorNewsApi
        isErrorServer={props.isErrorServer}
        errorMessage={props.errorMessage}
      />

      <NewsCardList
        loggedIn={props.loggedIn}
        newsCards={props.newsCards}
        totalResult={props.totalResult}
        isSearchResult={props.isSearchResult}
        showItems={props.showItems}
        handleShowMeMore={props.handleShowMeMore}
        onSaveNewsArticle={props.onSaveNewsArticle}
        onDeleteArticles={props.onDeleteArticles}
        getUsersArticles={props.getUsersArticles}
        keyword={props.keyword}
        setNewsCards={props.setNewsCards}
      />
      <About />
    </div>
  );
}

export default Main;
