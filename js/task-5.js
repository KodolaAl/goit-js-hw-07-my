function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const changeBodyColor = document.querySelector('.change-color');
  const textBodyColor = document.querySelector('.color');
  const body = document.querySelector('body');
 changeBodyColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor()
    body.style.backgroundColor = randomColor;
    textBodyColor.textContent = `${randomColor}`
  })
 