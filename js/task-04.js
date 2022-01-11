const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = `${counterValue}`;
})
incrementBtn.addEventListener("click", () => { 
    counterValue += 1;
    counter.textContent = `${counterValue}`;
})




let counterValue = 0;
const refs = {
  decrementButton: document.querySelector(`[data-action="decrement"]`),
  incrementButton: document.querySelector(`[data-action="increment"]`),
  counter: document.querySelector(`#value`),
}
refs.decrementButton.addEventListener(`click`, increment)
refs.incrementButton.addEventListener(`click`, decrement)
function increment(){
  counterValue -=  1;
  refs.counter.textContent = `${counterValue}`
}
function decrement(){
  counterValue += 1;
  refs.counter.textContent = `${counterValue}`
}



