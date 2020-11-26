//Здесь содержаться методы для валидации форм

export const handleValidationEmail = (mail) => {
    const regExpEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
    return regExpEmail.test(mail);
  }

  export const handleValidationPassword = (pass) => {
    if ( pass.length < 6 || pass.length > 25 || !pass.trim()) {
      return false;
  } else {return true;}}  

  export const handleValidationTextInputRequired = (input) => {
    if ( input.length < 2 || input.length > 25 || !input.trim()) {
      return false;
  } else {return true;}}  