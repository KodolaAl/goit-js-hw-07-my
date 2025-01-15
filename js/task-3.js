const textInput = document.querySelector("#name-input");
const nameInput = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  const nameWithoutSpaces = textInput.value.trim();
  nameInput.textContent = nameWithoutSpaces === "" ? "Anonymous" : nameWithoutSpaces;
  // if (nameWithoutSpaces === "") {
  //   return nameInput.textContent = "Anonymous";
  // }
  // return nameInput.textContent = nameWithoutSpaces;
});
