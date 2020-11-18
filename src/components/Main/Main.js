import React from "react";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function Main() {
  return (
    <div className="main__cover">
      <main className="main">
          
      </main>
      <Preloader />
      <NotFound />

      <About />
    </div>
  );
}

export default Main;
