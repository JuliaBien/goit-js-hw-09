import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const timePicker = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const remainingDays = document.querySelector('span[data-days]');
const remainingHours = document.querySelector('span[data-hours]');
const remainingMinutes = document.querySelector('span[data-minutes]');
const remainingSeconds = document.querySelector('span[data-seconds]');
let chosenData = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    chosenData = selectedDates[0];
    const now = new Date();
    if (chosenData <= now) {
      Notify.failure('Please choose a date in the future');
      startButton.setAttribute('disabled', '');
    } else {
      startButton.removeAttribute('disabled');
    }
  },
};
startButton.setAttribute('disabled', '');
flatpickr(timePicker, options);
const timeCounting = () => {
  let interval = null;
  interval = setInterval(() => {
    const addLeadingZero = value => {
      return value.toString().padStart(2, '0');
    };
    const timeNow = new Date();
    const timeChosen = new Date(chosenData);
    const timeLeft = timeChosen.getTime() - timeNow.getTime();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    const timeLeftObject = convertMs(timeLeft);
    remainingDays.innerText = addLeadingZero(timeLeftObject.days);
    remainingHours.innerText = addLeadingZero(timeLeftObject.hours);
    remainingMinutes.innerText = addLeadingZero(timeLeftObject.minutes);
    remainingSeconds.innerText = addLeadingZero(timeLeftObject.seconds);
  }, 1000);
};
startButton.addEventListener('click', timeCounting);
