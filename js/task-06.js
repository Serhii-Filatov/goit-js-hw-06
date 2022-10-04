/* Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
    проверяет его содержимое на правильное количество введённых символов.

    - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
    - Если введено подходящее количество символов, то border инпута становится зелёным,
      если неправильное - красным.
    - Для добавления стилей, используй CSS-классы valid и invalid, 
      которые мы уже добавили в исходные файлы задания.
*/

const refs = {
  input: document.querySelector('#validation-input'),
  dataLength: document.querySelector('#validation-input').getAttribute('data-length'),
};

const checkInput = event => {
  if (Number(refs.dataLength) === refs.input.value.length) {
    refs.input.classList.add('valid');
  } else {
    refs.input.classList.add('invalid');
  }

  if (
    Number(refs.dataLength) === refs.input.value.length &&
    refs.input.classList.contains('invalid')
  ) {
    refs.input.classList.replace('invalid', 'valid');
  } else {
    refs.input.classList.replace('valid', 'invalid');
  }
};

refs.input.addEventListener('blur', checkInput);
