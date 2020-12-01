import React from "react";

function SearchForm(props) {
  const [errMessage, setErrMessage] = React.useState("");

  function handleChangeKeyword(evt) {
    props.setKeyword(evt.target.value);
    setErrMessage("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!props.keyword) {
      return setErrMessage("Нужно ввести ключевое слово");
    }
    props.onUpdateKeyword(props.keyword);
  }

  return (
    <section className="search">
      <h2 className="search__title">Что творится в мире?</h2>
      <p className="search__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <form
        name="search-bar"
        className="search__form"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="search__form-info">
          <input
            type="text"
            name="search"
            value={props.keyword || ""}
            onChange={handleChangeKeyword}
            required
            placeholder="Введите тему новостей"
            className="search__form-input"
          />
        </fieldset>
        <button type="submit" className="search__button">
          Искать
        </button>
      </form>
      <span className="search__error_visible">{errMessage}</span>
    </section>
  );
}

export default SearchForm;
