const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInpunChange);
function onInpunChange(event) {
  let inputText = event.currentTarget.value;
  if (inputText === "") {
    inputText = `Anonymous`;
  }
  refs.span.textContent = inputText;
}
