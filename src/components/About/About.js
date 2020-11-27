import React from "react";
import author from "../../images/about/author.png";

function About() {
  return (
    <section className="about">
      <img src={author} alt="фото автора" className="about__author-photo" />
      <div className="about__info">
          <h2 className="about__title">Об авторе</h2>
          <p className="about__paragraph">
          Привет, Земляне! Меня зовут Илья и я студент Яндекс Практикума! Мама говорит, что я особенный. Поэтому, мне купили компьютер и я начал учиться.
          Нравится создавать всякие блоки с красивыми картинками, а еще обожаю анимации всякие, что бы так: вжик, пав, виу и красота!
          </p>
          <p className="about__paragraph">
          В Практикуме мне очень нравится, все такие добрые, внимательные, отзывчивые.
          Я многому научился и очень благодарен своим наставникам, а особенно мистеру тренажеру, ведь мы с ним лучшие друзья!
          </p>
      </div>
    </section>
  );
}

export default About;
