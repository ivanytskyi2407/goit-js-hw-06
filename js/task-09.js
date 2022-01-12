
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
bodyPage: document.querySelector('body'),
bodyRandomColor: document.querySelector('.color'),
btnChangeColor: document.querySelector('.change-color'),
};
refs.btnChangeColor.addEventListener(`click`, () => { 
refs.bodyRandomColor.textContent = getRandomHexColor(); 
refs.bodyPage.style.backgroundColor = getRandomHexColor();
})


