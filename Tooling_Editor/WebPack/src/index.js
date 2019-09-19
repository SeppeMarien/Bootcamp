//const calc = require('./calc');
//console.log(calc.add(1, 2));

const person = {
    name: 'jan',
    age: 12
  };
  
  // object spread not supported by node 6
  const otherPerson = { ...person, age: 20 };
  console.log(otherPerson);

  const bigNumber = 123_234_234;
console.log(bigNumber);