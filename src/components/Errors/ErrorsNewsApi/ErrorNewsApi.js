import React from "react";
import serverErrorPic from "../../../images/errors/error-server.png";

function ErrorNewsApi(props) {
  return (
    <div className={`error ${props.isErrorServer && "error_state_active"}`}>
      <img
        src={serverErrorPic}
        alt="ошибка сервера ;("
        className="error__img"
      />
      <p className="error__paragraph">{props.errorMessage}</p>
    </div>
  );
}

export default ErrorNewsApi;
