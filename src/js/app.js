import sortByHealth from './sortByHealth.js';
const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
console.log(sortByHealth(characters))