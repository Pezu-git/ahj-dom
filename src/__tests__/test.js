/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import appear from '../js/app.js';

test('waits 1 second before ending the game', () => {
  function template() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<div class="goblin"></div>
</body>
</html>`;
  }
  template();
  appear();
  expect(appear).toBe('goblin active');
  // const expected = goblin[10].classList.contains('active');
  // expect(expected).toBeTruthy();
});
