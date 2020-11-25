import React from "react";

function Preloader(props) {

  return (
    <div className={`preloader ${
            props.isPreloader &&
            "preloader_state_active"
          }`}>
      <i className="circle-preloader"></i>
      <p className="preloader__paragraph">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
 