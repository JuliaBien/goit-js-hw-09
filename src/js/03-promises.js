import Notiflix from 'notiflix';
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      } else {
      }
    }, inputStep);
  });
}
const submitButton = document.querySelector('button');
const form = document.querySelector('form.form');
const inputDelay = form.elements.delay.value;
const inputStep = form.elements.step.value;
const inputAmount = form.elements.amount.value;

const startCreating = () => {
  setTimeout(() => {
    for (let i = 0; i <= inputAmount; i++) {
      createPromise();
    }
  }, inputDelay);
};
submitButton.addEventListener('click', startCreating);
