import deepfreeze from 'deep-freeze';

// excer 1:
const obj = { name: 'peter', age: 25 };
deepfreeze(obj);

// Set the age to 52

const newObject = {
  ...obj,
  age: 52,
};

console.log(newObject);

// excer 2:
const ar = [12, 33, 999];
deepfreeze(ar);

// Add the number 1000 to the array
const ar2 = [...ar, 1000];
console.log(ar2);

// excer 3:
const ar3 = [{ name: 'jane' }, { name: 'john' }, { name: 'ike' }];
deepfreeze(ar3);

// Remove john from the array
const ar4 = ar3.filter(item => item.name !== 'john');
console.log(ar4);

// excer 4:
const ar5 = [{ name: 'jane', age: 12 }, { name: 'john', age: 22 }, { name: 'ike', age: 1 }];
deepfreeze(ar5);

// Set the age of ike to 20
const ar6 = ar5.map(item => {
  if (item.name === 'ike') {
    return {
      ...item,
      age: 20,
    };
  }
  return item;
});

console.log(ar6);

// excer 5:
const ar7 = [1, 5, 6, 1000];
deepfreeze(ar7);

// Take the second & third element
// const ar8 = [...ar7.slice(1, 3)];

const ar8 = Object.assign({}, ar7.slice(1, 3));

console.log(ar8);
