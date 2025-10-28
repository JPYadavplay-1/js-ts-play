if(true){
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x);// only var is valid here because var has function scope

//console.log(y);let is not valid because let has block scope
/*
when you run the above code, it will throw a ReferenceError for y and z because they are not accessible outside the if block.
ReferenceError: y is not defined
ReferenceError: z is not defined
*/
//console.log(z); const is not valid because const has block scope


let accountNumber = 1234
let accountName = "JP"
let accuntCity = "SEC"

area = "chakripuram"

//printing output in two ways
console.log(accountNumber)
console.log(accountName)
console.log(accuntCity)
console.log(area)

console.table([accountName,accountNumber,accuntCity,area])