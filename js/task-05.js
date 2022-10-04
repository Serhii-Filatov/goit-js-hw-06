// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const changeOutput = event => {
  const { value } = event.currentTarget;
  if (event.currentTarget.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
};

nameInput.addEventListener('input', changeOutput);
