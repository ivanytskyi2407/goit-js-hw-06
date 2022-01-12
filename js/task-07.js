const inputSizeControl = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');
inputSizeControl.addEventListener('input', () => {
    textChange.style.fontSize =`${inputSizeControl.valueAsNumber}px`;
})