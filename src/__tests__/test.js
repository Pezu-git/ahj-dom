/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import appear from '../js/app.js';

test('waits 1 second before ending the game', () => {
  document.body.innerHTML =
    '<div>' +
    '  <img class="goblin" />' +
    '</div>';
  appear();
  expect(appear).toBe('goblin active');
  // const expected = goblin[10].classList.contains('active');
  // expect(expected).toBeTruthy();
});
