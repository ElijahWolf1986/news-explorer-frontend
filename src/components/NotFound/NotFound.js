import React from "react";
import notFoundIcon from "../../images/main/not-found-ico.svg";

function NotFound() {
  return (
    <div className="notfound">
        <img src={notFoundIcon} alt="иконка грустной лупы" className="notfound__img" />
        <h2 className="notfound__title">Ничего не найдено</h2>
        <p className="notfound__paragraph">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  );
}

export default NotFound;