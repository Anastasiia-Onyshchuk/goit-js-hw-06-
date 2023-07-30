function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color')
 const spanValue = document.querySelector('.color');
changeColorBtn.addEventListener('click', onBtnClick);
function onBtnClick(evt) {
  let colorValue = getRandomHexColor();
  spanValue.textContent = colorValue;
body.style.backgroundColor = colorValue;
};