import React from "react";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchForm from "../SearchForm/SearchForm";

function Main() {
  return (
    <div className="main">
      <main className="main__cover">
        <SearchForm />
      </main>
      <Preloader />
      <NewsCardList />
      <NotFound />
      <About />
    </div>
  );
}

export default Main;
