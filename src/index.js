/* eslint-disable no-restricted-syntax */

export default class Team {
  constructor() {
    this.members = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Мечник',
        type: 'Swordsman',
        health: 70,
        level: 1,
        attack: 30,
        defence: 20,
      },
      {
        name: 'Маг',
        type: 'Magician',
        health: 40,
        level: 1,
        attack: 50,
        defence: 10,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (const person of this.members) {
      yield person;
    }
  }
}
