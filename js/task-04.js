const refs = {
counter: document.querySelector('#value'),
decrementBtn: document.querySelector('[data-action="decrement"]'),
incrementBtn: document.querySelector('[data-action="increment"]'),
};

// const counter = document.querySelector('#value');
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;
refs.decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
})
refs.incrementBtn.addEventListener("click", () => { 
    counterValue += 1;
    refs.counter.textContent = counterValue;
})


