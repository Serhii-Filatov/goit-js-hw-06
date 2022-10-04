let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const decrement = () => {
        counterValue = counterValue - 1;
        value.textContent = counterValue;
}

const increment = () => {
        counterValue = counterValue + 1;
        value.textContent = counterValue;
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);