import calculator, { addNamed } from './calc';

// console.log(process.argv[2]);

const result = calculator.add(1, 2);
const resultNamed = addNamed(3, 2);

console.log(result);
console.log(resultNamed);
