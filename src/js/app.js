/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line eol-last

const numArr = [];
export default function appear() {
  const min = Math.ceil(0);
  const max = Math.floor(16);
  const number = Math.floor(Math.random() * (max - min));
  const goblin = document.querySelectorAll('.goblin');
  const active = document.querySelector('.active');
  // const number = Math.floor(Math.random() * (max - min));
  if (numArr[0] === number && number > min) { // если число повторяется и может быть равно Max
    goblin[number - 1].classList.add('active');
    numArr[0] = number - 1;
  } else if (numArr[0] === number && number < max - 1) { // если число повторяется и может быть равно Min
    goblin[number + 1].classList.add('active');
    numArr[0] = number + 1;
  } else {
    goblin[number].classList.add('active');
    numArr[0] = number;
  }
  if (active) {
    active.classList.remove('active');
  }
}
setInterval(() => appear(), 500);
