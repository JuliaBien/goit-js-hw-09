import Notiflix from 'notiflix';
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      } else {
      }
    }, step);
  });
}
const submitButton = document.querySelector('button');
const form = document.querySelector('form.form');
const delay = form.elements.delay.value;
const step = form.elements.step.value;
const amount = form.elements.amount.value;

const startCreating = () => {
  setTimeout(() => {
    for (let i = 0; i <= amount; i++) {
      createPromise();
    }
  }, delay);
};
submitButton.addEventListener('click', startCreating);
