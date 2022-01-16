// Зміні
const refs = {
divBoxes: document.querySelector('#boxes'),
inputRef: document.querySelector('input'),
createBtn: document.querySelector('[data-create]'),
destroyBtn: document.querySelector('[data-destroy]'),
};
// Випадковий колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.inputRef.addEventListener('blur', getAmout)

function getAmout(event) {
  createBoxes(Number(event.currentTarget.value));
  event.currentTarget.value = '';
}
// Створити
refs.createBtn.addEventListener('click', createBoxes);

function createBoxes(amout) {
  let widthHeight = 20;
  for (let i = 0; i < amout; i++) { 
    widthHeight += 10;
const newDiv = document.createElement('div');
newDiv.style.width = `${widthHeight}px`;
newDiv.style.height = `${widthHeight}px`;
newDiv.style.background = getRandomHexColor();
newDiv.style.margin = '5px'
refs.divBoxes.append(newDiv);
  }
}
// Очистити
refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.divBoxes.innerHTML = '';
}







