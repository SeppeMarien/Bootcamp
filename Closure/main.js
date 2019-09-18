// Oef 1
var funct = (var1) => var1;

// Oef 2
var add = (var1, var2) => Number(var1) + Number(var2);
var mul = (var1, var2) => Number(var1) * Number(var2);

// Oef 3
var functOef3 = (var1) => () => var1;
var test = functOef3(4);
//console.log(test());

// Oef 4
var sumOef4 = (var1) => (var2) => Number(var1) + Number(var2);
var testOef4 = sumOef4(3)(4);
//console.log(testOef4)

// Oef 5
var applyf = (fnct) => (var1) => (var2) => fnct(var1, var2);
var addf = applyf(add);
//console.log(addf(3)(4));
//console.log(applyf(mul)(5) (6));

// Oef 6
var curry = (fnct, var1) => (var2) => fnct(var1, var2)
var add3 = curry(add, 3);
//console.log(add3(4));
//console.log(curry(mul,5)(6));

// Oef 7
// eerste manier
// var inc = curry(add, 1);

// Tweede manier
var inc = (applyf(add)(1));
//console.log(inc(5));
//console.log(inc(inc(5)))