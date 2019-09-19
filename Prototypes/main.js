function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback.call(arr, arr[i], i);
    }
}

// myForEach([0, 1, 2], function(value, index) {
//     console.log(value, this[index] === value /* should be true */);
// });

Array.prototype.myForEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback.call(this, this[i], i);
    }
}

// const arr = [0, 1, 2];

// arr.myForEach2(function(value) {
//     console.log(value);
// })


// ------ Exerc. 2 -------

// Reuse functions

const eating = () => console.log("Eating");
const jumping = () => console.log("Jumping");

// // first way with object.create
// const Animal = Object.create(null);
// Animal.eat = eating

// const Rabit = Object.create(Animal);
// Rabit.jump = jumping

// Sec way with constructor function
function Animal() {
} 

Animal.prototype.eat = eating

function Rabit() {

}

Rabit.prototype = Object.create(Animal.prototype);
Rabit.prototype.constructor = Rabit;

Rabit.prototype.jump = jumping;

const rabit = new Rabit();
rabit.eat();
rabit.jump();


// // 3th way with classes
// class AnimalCls {
//     constructor() {

//     }

//     eating(){
//         console.log("Eating");  
//     };
// }

// class RabitCls extends AnimalCls {
//     constructor() {
//         super();
//     }

//     jumping() {
//         console.log("Jumping");
//     };
// }

// const Rabit = new RabitCls();

// Rabit.eat(); 
// Rabit.jump()