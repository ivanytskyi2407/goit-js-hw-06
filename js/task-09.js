
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyPage = document.querySelector('body');
const bodyRandomColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener(`click`, () => { 
 bodyRandomColor.textContent = getRandomHexColor(); 
bodyPage.style.backgroundColor = getRandomHexColor();
})


