// function testVar(){
//     var a = 1;

// }
// console.log(testVar()); // this will log 'undefined' because the function does not return anything
// console.log(a); // this will throw a ReferenceError because 'a' is not defined in this scope    
// testVar();
// console.log(a); // this will still throw a ReferenceError because 'a' is not defined in this scope
// console.log(typeof a); // this will log 'undefined' because 'a' is not defined in this scope

// when we get reference error then the variable is not defined in that scope
// to access the variable we need to return it from the function
// or we can define the variable in the global scope
// if a function get error then the code after that will not execute
// so we need to handle the error or return the variable from the function
function testVar2(){
    var b = 2;
return b;
}
console.log(testVar2()); // this will log '2' because the function returns the value of 'b'
// console.log(b); // this will throw a ReferenceError because 'b' is not defined in this scope    
// testVar2();
// console.log(b); // this will still throw a ReferenceError because 'b' is not defined in this scope
// console.log(typeof b); // this will log 'undefined' because 'b' is not defined in this scope

//var is function scoped

function example() {
  var a = 10;
  if (true) {
    var b = 20; // same function scope
  }
  console.log(a); // ✅ 10
  console.log(b); // ✅ 20 — still visible inside the function
}
example();

console.log(a); // ❌ ReferenceError
console.log(b); // ❌ ReferenceError


function example() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(x); // ✅ 10
    console.log(y); // ✅ 20
  }
  console.log(x); // ✅ 10
  console.log(y); // ❌ ReferenceError — block scope ended
}
example();


if (true) {
  var test = "Hello";
  let blockLet = "Hi";
  const blockConst = "Hey";
}
console.log(test);      // ✅ "Hello" — var ignores block scope
console.log(blockLet);  // ❌ ReferenceError
console.log(blockConst);// ❌ ReferenceError
