import React from 'react';
import PopupWithForm from './PopupWithForm/PopupWithForm';

function InfoTooltip(props) {    
    return (
        <PopupWithForm name='popup_auth' title='Пользователь успешно зарегестрирован!' isOpen={props.isOpen} onClose={props.onClose} >
            <button className="popup__redirect-link" onClick={props.redirect}>Войти</button>
            {/* <fieldset className="popup__form-auth">
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
            </div> */}

        </PopupWithForm>
    )
}

export default InfoTooltip;   
