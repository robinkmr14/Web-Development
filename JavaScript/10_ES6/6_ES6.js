// ECMAScript 2015 / ES6 --> Features

/*
--->  let and const
--->  Template String
--->  Default arguments
--->  Rest Operators
--->  Destructuring
--->  Object Properties
--->  Arrow Function
--->  Spread Operators
*/

// let VS const VS var
/*
  var --> Function scope
  let and const --> block scope
*/


// Using var
function myFirstName() {
    var fName = "Robin";

    if (true) {
        var lName = "Kumar"
        console.log(fName);
    }
    console.log(lName);
}
myFirstName();


// Using let
function myFirstName() {
    let fName = "Robin";

    if (true) {
        let lName = "Kumar"
        console.log(fName);
    }
    // console.log(lName); // throw an error--> lName is not defined
}
myFirstName();



// Template literals(Template String)
for (let i = 1; i <= 10; i++) {
    let tableOf = 5;
    console.log(`${tableOf} * ${i} = ${tableOf * i}`) // Template String
}



// Default Arguments
function add(a, b = 10) {
    return a + b;
}
console.log(add(5));


// Fat Arrow Function
const mul = () => {
    let x = 10;
    let y = 20;
    return `Multiply of two numbers is : ${x * y}`
}
console.log(mul());

// Arrow Function we also use like this only for one line code
const sub = () => `Substraction of two numbers is : ${(x = 40) - (y = 20)}`

console.log(sub());


