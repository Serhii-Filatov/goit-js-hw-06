/*
    Напиши скрипт, который реагирует на изменение значения input#font-size-control 
    (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
    В результате при перетаскивании ползунка будет меняться размер текста.
*/
const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
}

const changeTextSize = (event) => {
  refs.span.style.fontSize = `${event.currentTarget.value}px`;
}

refs.input.addEventListener('input', changeTextSize)
