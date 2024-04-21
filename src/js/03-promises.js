import Notiflix from 'notiflix';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const form = document.querySelector('form.form');

const startCreating = event => {
  event.preventDefault();
  const inputDelay = Number(form.elements.delay.value);
  const inputStep = Number(form.elements.step.value);
  const inputAmount = Number(form.elements.amount.valu);
  for (let i = 0; i <= inputAmount; i++) {
    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          'Fullfiled promise ${position} in ${delay} seconds'
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          'Rejected promise ${position} in ${delay} seconds'
        );
      });
    inputDelay += inputStep;
  }
};
form.addEventListener('submit', startCreating);
