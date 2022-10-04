// Напиши скрипт управления формой логина.
/*
    - Обработка отправки формы form.login-form должна быть по событию submit.
    - При отправке формы страница не должна перезагружаться.
    - Если в форме есть незаполненные поля, 
        выводи alert с предупреждением о том, что все поля должны быть заполнены.
    - Если пользователь заполнил все поля и отправил форму, 
        собери значения полей в обьект, где имя поля будет именем свойства,
        а значение поля - значением свойства. 
        Для доступа к элементам формы используй свойство elements.
    - Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/
const refs = {
  form: document.querySelector('.login-form'),
};

const onClickSubmit3 = event => {
  event.preventDefault();

  if (refs.form.elements.email.value !== '' && refs.form.elements.password.value !== '') {
    const formValues = {
      email: refs.form.elements.email.value,
      password: refs.form.elements.password.value,
    };

    event.currentTarget.reset();

    return console.log(formValues);
  }

  alert('Все поля должны быть заполнены.');
};

refs.form.addEventListener('submit', onClickSubmit3);
