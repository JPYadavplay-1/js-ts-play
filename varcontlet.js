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


function testLetConst(){
    let j = 10
    const k = 20
    if(true){
        console.log(j,k)
    }
    return j,k
}
console.log(testLetConst()); // this will log '20' because the function returns the value of 'k'
//in javascript (,) is a operator not separator so it will return the last value
// console.log(j); // this will throw a ReferenceError because 'j' is not defined in this scope    
// console.log(k); // this will throw a ReferenceError because 'k' is not defined in this scope    
// testLetConst();
// console.log(j); // this will still throw a ReferenceError because 'j' is not defined in this scope
// console.log(k); // this will still throw a ReferenceError because 'k' is not defined in this scope
// console.log(typeof j); // this will log 'undefined' because 'j' is not defined in this scope
// console.log(typeof k); // this will log 'undefined' because 'k' is not defined in this scope

/*
| Expression         | What happens                             | Returns            |
| ------------------ | ---------------------------------------- | ------------------ |
| `return j, k;`     | Evaluates both, ignores `j`, returns `k` | `20`               |
| `return [j, k];`   | Returns an array                         | `[10, 20]`         |
| `return { j, k };` | Returns an object                        | `{ j: 10, k: 20 }` |

*/

function testScopeLetVar() {
    if (true) {
        let a = 10;
        const b = 20;
        console.log(a, b); // ✅ Works inside the block
    }
    console.log(a, b); // ❌ ReferenceError (outside block)
}
testScopeLetVar();


//validating the scope 

function testLetConst() {
    if (true) {
        let a = 10;
        let b = 20;
        console.log(a, b);
    }
    // console.log(a, b);
    return [a, b];
}

console.log(testLetConst());
// Uncaught ReferenceError: a is not defined
// Uncaught ReferenceError: b is not defined

// The error occurs because 'a' and 'b' are block-scoped variables declared with 'let' inside the 'if' block.
// They are not accessible outside of that block, including in the return statement.
// To fix this, you would need to declare 'a' and 'b' in a scope that is accessible to the return statement, such as the function scope.



//fixed version 


function testLetConst() {
    let a, b; // declare in function scope
    if (true) {
        a = 10;
        b = 20;
        console.log(a, b);
    }
    return [a, b];
}

console.log(testLetConst());
// This will work correctly and log: 10 20  
// [10, 20]
// No ReferenceError

// The variables 'a' and 'b' are now declared in the function scope, so they can be accessed both inside the 'if' block and in the return statement.    


// if you want values to to return from block scope then you can use return statement inside the block

function testLetConst() {
    if (true) {
        let a = 10;
        let b = 20;
        console.log(a, b);
        return [a, b]; // return inside the same scope
    }
}

console.log(testLetConst());

// This will work correctly and log: 10 20  
// [10, 20]
// No ReferenceError    
// The return statement is now inside the 'if' block where 'a' and 'b' are defined, so it can access those variables without any issues.

// Note: A function can have multiple return statements but only one will execute based on the flow of the function.    
function testLetConst() {
    if (true) {
        let a = 10;
        let b = 20;
        console.log(a, b);
        return [a, b]; // return inside the same scope
    }
    return "No values"; // this will never execute in this case
}

console.log(testLetConst());        
// This will work correctly and log: 10 20  
// [10, 20]
// No ReferenceError    
// The return statement is now inside the 'if' block where 'a' and 'b' are defined, so it can access those variables without any issues.

// Note: A function can have multiple return statements but only one will execute based on the flow of the function.    
function testLetConst() {
    if (false) {
        let a = 10;
        let b = 20;
        console.log(a, b);
        return [a, b]; // return inside the same scope
    }
    return "No values"; // this will execute now
}

console.log(testLetConst());        
// This will log: "No values"       
// "No values"
// No ReferenceError    
// The return statement inside the 'if' block will not execute because the condition is false.
// Instead, the function will execute the second return statement and return "No values".