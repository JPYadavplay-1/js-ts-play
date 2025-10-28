//number
//bitint
//string
//boolean
//null
//undefined
//symbol
//object

let num = 42; // number
let bigIntNum = 9007199254741991n; // bigint
let str = "Hello, World!"; // string
let bool = true; // boolean
let n = null; // null // standalone value
let undef; // undefined
let sym = Symbol("unique"); // symbol
let obj = { name: "Alice", age: 30 }; // object

console.log(typeof num); // "number"
console.log(typeof bigIntNum); // "bigint"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
console.log(typeof n); // "object" (this is a known quirk in JavaScript)
console.log(typeof undef); // "undefined"
console.log(typeof sym); // "symbol"
console.log(typeof obj); // "object"      

/*
learn more about data types here:
how to check data types in javascript
typeof data
console.log(typeof data)

difference between null and undefined
null is an assigned value that represents no value
undefined means a variable has been declared but not assigned a value   
typeof null is object (this is a known quirk in JavaScript)
typeof undefined is undefined   
this is because null is considered an object in JavaScript, while undefined is its own type.

primitive vs non-primitive data types in javascript
primitive data types: number, string, boolean, null, undefined, symbol, bigint
non-primitive data types: object, array, function

primitive data types are immutable (cannot be changed)
non-primitive data types are mutable (can be changed)
*/

// Examples:
let str2 = "hello";
str2[0] = "H"; // this will not change the string
console.log(str2); // "hello"

let arr = [1, 2, 3];
arr[0] = 10; // this will change the array
console.log(arr); // [10, 2, 3]     
let obj2 = { name: "Alice" };
obj2.name = "Bob"; // this will change the object
console.log(obj2); // { name: "Bob" }    
