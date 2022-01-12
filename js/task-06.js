const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onInputChange);

function onInputChange({ currentTarget }) {
  const textInputLength = currentTarget.value.length;
  const textInputInstallLength = textInput.dataset.length;
  textInput.classList.toggle(
    `valid`,
    textInputLength == textInputInstallLength
  );
  textInput.classList.toggle(
    `invalid`,
    textInputLength != textInputInstallLength
  );
}
