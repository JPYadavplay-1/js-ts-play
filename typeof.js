//let score = 100;//
let score = "100ad"

console.log(typeof score); // "number"
console.log(typeof(score)); // "number"

let valueInNumber = Number(score)

console.log(typeof valueInNumber); // "number"
console.log(valueInNumber); // "number"

//NaN - Not a Number
console.log(valueInNumber); // NaN
console.log(typeof valueInNumber); // "number"

//isNaN() function
console.log(isNaN(valueInNumber)); // true
console.log(isNaN(score)); // false

//Check if value is finite number

let score1 = null;
console.log(typeof score1); // "object"

let score2 = undefined;
console.log(typeof score2); // "undefined"

let score3;
console.log(typeof score3); // "undefined"

let score4 = 123n;
console.log(typeof score4); // "bigint"

let score5 = true;
console.log(typeof score5); // "boolean"

let score6 = Symbol("id");
console.log(typeof score6); // "symbol"

let score7 = {name: "John"};
console.log(typeof score7); // "object"
