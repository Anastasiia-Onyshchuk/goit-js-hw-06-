let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const spanValue = document.querySelector('#value');

const decreaseCounter = (function () {
    counterValue -= 1;
    spanValue.textContent = counterValue;
});
decrementBtn.addEventListener('click', decreaseCounter);

const increaseCounter = (function () {
    counterValue += 1;
    spanValue.textContent = counterValue;
});

incrementBtn.addEventListener('click', increaseCounter);


