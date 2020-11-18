import React from "react";

function Preloader() {
  return (
    <div className="preloader">
      <i class="circle-preloader"></i>
      <p className="preloader__paragraph">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
