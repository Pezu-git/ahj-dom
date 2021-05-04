/* eslint-disable no-plusplus */
/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/named
import appear from '../js/app.js';
// import max from '../js/app.js';

test('waits 1 second before ending the game', () => {
  const board = document.createElement('div');
  board.classList.add('board');
  document.body.appendChild(board);

  for (let i = 0; i < 16; i++) {
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
  appear(1);
  // expect(appear).toBe(template());
  const goblin = document.querySelectorAll('.goblin');
  const received = goblin[0].classList.contains('active');
  // const received = console.log(goblin[0]);
  expect(received).toBeTruthy();
});
