import React from "react";

function SearchForm(props) {
  const [keyword, setKeyword] = React.useState('');

  function handleChangeKeyword(evt) {
    setKeyword(evt.target.value);
}

function handleSubmit(evt) {
  evt.preventDefault();
  props.onUpdateKeyword(keyword);
}

  return (
    <section className="search">
        <h2 className="search__title">Что творится в мире?</h2>
        <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form name="search-bar" className="search__form" noValidate onSubmit={handleSubmit}>
            <fieldset className="search__form-info">
                <input type="text" name="search" onChange={handleChangeKeyword} required placeholder="Введите тему новостей" className="search__form-input" />
                <span className="search__error_visible"></span>
            </fieldset>
            <button type="submit" className="search__button">Искать</button>
        </form>


    </section>
  );
}

export default SearchForm;



