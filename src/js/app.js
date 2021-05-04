/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */

const board = document.createElement('div');
board.classList.add('board');
document.body.appendChild(board);
const min = Math.ceil(0);
const max = Math.floor(16);
const numArr = [];
// const number = Math.floor(Math.random() * (max - min));

for (let i = 0; i < max; i++) {
  const newMap = document.createElement('div');
  newMap.classList.add('map');
  board.appendChild(newMap);
  const newImgDiv = document.createElement('div');
  newImgDiv.classList.add('img');
  newMap.appendChild(newImgDiv);
  const imgDiv = new Image();
  imgDiv.src = 'https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true';
  imgDiv.classList.add('goblin');
  newImgDiv.appendChild(imgDiv);
}
export default function appear() {
  const number = Math.floor(Math.random() * (max - min));
  const goblin = document.querySelectorAll('.goblin');
  const active = document.querySelector('.active');
  while (numArr[0] === number && number > min) {
    goblin[number - 1].classList.add('active');
    numArr[0] = number - 1;
  }
  while (numArr[0] === number && number < max - 1) {
    goblin[number + 1].classList.add('active');
    numArr[0] = number + 1;
  }
  goblin[number].classList.add('active');
  numArr[0] = number;
  if (active) {
    active.classList.remove('active');
  }
}
// appear();
setInterval(() => appear(), 600);
