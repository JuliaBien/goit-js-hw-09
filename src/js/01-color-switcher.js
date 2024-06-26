const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let intervalId = null;
const colorChanging = () => {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.setAttribute('disabled', '');
};
const stopColorChanging = () => {
  clearInterval(intervalId);
  startButton.removeAttribute('disabled');
};
startButton.addEventListener('click', colorChanging);
stopButton.addEventListener('click', stopColorChanging);
