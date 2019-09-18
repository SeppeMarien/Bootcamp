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

const arr = [0, 1, 2];

arr.myForEach2(function(value) {
    console.log(value);
})


