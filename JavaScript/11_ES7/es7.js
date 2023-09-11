/*

** ECMAScript 2016 introduced only two new features:

1. Array.prototype.includes()

>> Array.prototype.includes() checks the array for the value passed as an argument.
 It returns true if the array contains the value, otherwise, it returns false.

>> Syntax:-
    Array.includes(value)
    OR
    Array.includes(value,start_index)



2. Exponentiation operator (**)

>> It has the same purpose as Math.pow(). It returns the
 first argument raised to the power of the second argument.

>> Syntax:-
    base_value ** exponent_value

*/

// array include

const colors = ["red", "blue", "green", "black"];
const inPresent = colors.includes("green");
console.log(inPresent);

// Exponentiation operator(**)

let base = 2;
let exponent = 3;
console.log("using Math.pow()", Math.pow(base, exponent));
console.log("using exponentiation operator", base ** exponent);
