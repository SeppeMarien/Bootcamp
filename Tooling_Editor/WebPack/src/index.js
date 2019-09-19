const calc = require('./calc');

console.log(calc.add(1, 2));

const person = {
  name: 'jan',
  age: 12,
};

console.log(person);
// object spread not supported by node 6
// const otherPerson = { ...person, age: 20 };
// console.log(otherPerson);

const bigNumber = 123_234_234;
console.log(bigNumber);

// Excer clean wiht eslint

const name = 'Freddy';
typeof name === 'strng';

if (!('serviceWorker' in navigator)) {
  // you have an old browser :-(
}

const greeting = 'hello';
console
  .log(`${greeting} world!`)

  [(1, 2, 3)].forEach(x => console.log(x));
