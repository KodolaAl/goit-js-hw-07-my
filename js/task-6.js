function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const numberInput = controls.querySelector("input");
const buttons = controls.querySelectorAll("button");
const buttonCreate = buttons[0];
const buttonDestroy = buttons[1];
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  if (amount <= 1 || amount <= 100) {
    const boxsesArray = [];
    let size = 30;
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxsesArray.push(box);
      size += 10;
    }
    boxes.append(...boxsesArray);
  }
}
buttonCreate.addEventListener("click", () => {
  const amount = Number.parseInt(numberInput.value);
  createBoxes(amount);
  numberInput.value = "";
});
buttonDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
