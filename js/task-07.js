/*
    Напиши скрипт, который реагирует на изменение значения input#font-size-control 
    (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
    В результате при перетаскивании ползунка будет меняться размер текста.
*/

const inputTextRef = document.querySelector('#text');
const inputControlRef = document.querySelector('#font-size-control');
inputControlRef.oninput = function () {
  console.log(this.value);
  inputTextRef.style.fontSize = inputControlRef.value + 'px';
};
