import React from "react";
import githubIcon from "../../images/social/github-icon.svg";
import facebookIcon from "../../images/social/facebook-icon.svg";

function About() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2020 Supersite, Powered by News API
      </p>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li>
            <a href="/" className="footer__link">
              Главная
            </a>
          </li>
          <li>
            <a href="https://praktikum.yandex.ru/" target="new" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <div className="footer__social">
        <a href="https://github.com/ElijahWolf1986" target="new"> <img src={githubIcon} alt="иконка гитхаба" className="footer__social-icon" /> </a>
        <a href="https://www.facebook.com/profile.php?id=100057855962865" target="new"> <img src={facebookIcon} alt="иконка фейсбука" className="footer__social-icon" /></a>
        </div>
      </nav>
    </footer>
  );
}

export default About;
