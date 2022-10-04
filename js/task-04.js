// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
/*
    - Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
    - Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
    - Обновляй интерфейс новым значением переменной counterValue.
*/

let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const decrement = () => {
  counterValue = counterValue - 1;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue = counterValue + 1;
  value.textContent = counterValue;
};

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
