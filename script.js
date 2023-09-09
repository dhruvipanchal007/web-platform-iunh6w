// console.log('hi');

// time exceed -> call the function = 1
// 1000ms = 1 sec
// setTimeout(() => {
//   console.log('Hi');
// }, 5000);

// time exceed -> every time intervl -> call the function => infinite
const secondsEle = document.querySelector('#seconds');
const minuteEle = document.querySelector('#minutes');
const hourEle = document.querySelector('#hours');
const dayEle = document.querySelector('#days');

let counter = 0;

setInterval(() => {
  secondsEle.textContent = counter % 60;
  const minutes = Math.floor(counter / 60);
  minuteEle.textContent = minutes % 60;
  const hours = Math.floor(minutes / 60);
  hourEle.textContent = hours % 24;
  const days = Math.floor(hours / 24);
  dayEle.textContent = days;
  counter++;
}, 1000);
