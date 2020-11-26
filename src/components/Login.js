import React from 'react';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import {handleValidationEmail, handleValidationPassword} from "../utils/ValidationForm";

function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errMessageEmail, setErrMessageEmail] = React.useState("");
    const [errMessagePassword, setErrMessagePassword] = React.useState("");
    const [isButtonSaveDisabled, setButtonSaveDisabled] = React.useState(true);

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setErrMessageEmail("");
        setErrMessagePassword("");
      };
    
      const handleSubmit = (evt) => { //решает какую ошибку и где выводить пользователю при неверной валидации
        evt.preventDefault();
        if (handleValidationEmail(email) && handleValidationPassword(password)) {
            props.onLogin(email, password);
            resetForm();
        } else {
            if (!handleValidationEmail(email))  setErrMessageEmail("Неправильный формат email");
            if (!handleValidationPassword(password))  setErrMessagePassword("Пароль введен неверно");
            return
        }
      };

    
      const handleChangeEmail = (evt) => {
        setEmail(evt.target.value);
        setErrMessageEmail("");
      };
    
      const handleChangePassword = (evt) => {
        setPassword(evt.target.value);
        setErrMessagePassword("");
      };

      React.useEffect(() => { //устанавливает кнопку сохранить в нужную кондицию при изменении полей ввода
        if (email && password) {
          setButtonSaveDisabled(false);
        } else {
          setButtonSaveDisabled(true);
        }

      }, [handleChangeEmail, handleChangePassword]);

      React.useEffect(() => { //сбрасывает форму при выходе из нее даже если пользователь не дошел до отправки формы и передумал заполнять
        if (props.onResetForm) {
          resetForm();
        } 
      }, [props.onClose]);
    
    return (
        <PopupWithForm name='popup_auth' title='Вход' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
            <fieldset className="popup__form-auth">
                <label className="popup__label">Email</label>
                <input type="email" value={email || ''} onChange={handleChangeEmail} name="email" required placeholder="Введите почту" className="popup__input" />
                <span className="popup__error_visible">{errMessageEmail}</span>
                <label className="popup__label">Пароль</label>
                <input type="password" value={password || ''} onChange={handleChangePassword} name="password" required placeholder="Введите пароль" className="popup__input" />
                <span className="popup__error_visible">{errMessagePassword}</span>
            </fieldset>
            <span className="popup__server-error_visible">{props.onServerErrorMessage}</span>
            <button type="submit" className={`popup__button-save ${isButtonSaveDisabled && "popup__button-save_disabled"}`} disabled={isButtonSaveDisabled}>Сохранить</button>
            <div className="popup__redirect">
                <p className="popup__redirect-paragraph">или</p>
                <button className="popup__redirect-link" onClick={props.redirect}>Зарегестрироваться</button>
            </div>
        </PopupWithForm>
    )
}

export default Login;   
