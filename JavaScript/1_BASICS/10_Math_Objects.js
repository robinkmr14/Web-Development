

/* Math Object in JavaScript

>> The JavaScript Math object allows you to perform mathematical tasks on numbers.
>> Unlike other objects, the Math object has no constructor.
>> The Math object is static.
>> All methods and properties can be used without creating a Math object first.


* Math Properties (Constants)
>> The syntax for any Math property is : Math.property.
>> JavaScript provides 8 mathematical constants that can be accessed as Math properties:

        1. Math.E        --> returns Euler's number
        2. Math.PI       --> returns PI
        3. Math.SQRT2    --> returns the square root of 2
        4. Math.SQRT1_2  --> returns the square root of 1/2
        5. Math.LN2      --> returns the natural logarithm of 2
        6. Math.LN10     --> returns the natural logarithm of 10
        7. Math.LOG2E    --> returns base 2 logarithm of E
        8. Math.LOG10E   --> returns base 10 logarithm of E


* Number to Integer
    There are 4 common methods to round a number to an integer:
        --> Math.round(x)	Returns x rounded to its nearest integer
        --> Math.ceil(x)	Returns x rounded up to its nearest integer
        --> Math.floor(x)	Returns x rounded down to its nearest integer
        --> Math.trunc(x)	Returns the integer part of x (new in ES6)
*/


// How to find the value of PI

console.log(Math.PI);  // 3.141592653589793


// Math.round(x) --> returns the value of x rounded to its nearest integer.

console.log("round()\n");

let x = 10.54637;
console.log(Math.round(x));  // 11


// Math.pow(x,y) --> returns the value of x to the power of y.
console.log("\n pow() \n");
console.log(Math.pow(5,2));  // 25


// Math.sqrt() --> returns the square root of x

console.log("\n sqrt() \n");
console.log(Math.sqrt(81));  // 9
console.log(Math.sqrt(66));  // 8.12403840463596


// Math.abs(x) --> returns the absolute (positive) value of x

console.log("\n abs() \n");
console.log(Math.abs(-66));  // 66
console.log(Math.abs(-55.56));  // 55.56


// Math.ceil(x) --> returns the value of x rounded up to its nearest integer

console.log("\n ceil() \n");
console.log(Math.ceil(99.01)); // 100
console.log(Math.ceil(85.60)); // 86


// Math.floor(x) --> returns the value of x rounded down to its nearest integer

console.log("\n floor() \n");
console.log(Math.floor(50.56));  // 50
console.log(Math.floor(36.80));  // 36
console.log(Math.floor(43.01));  // 43


// Math.min() --> can be used to find the lowest value in a list of arguments.

console.log("\n min() & max() \n");
console.log(Math.min(0, 150, 30, 55, -86, -99));  // -99


// Math.max() --> can be used to find the highest value in a list of arguments.

console.log(Math.max(54, 76, 98, 67, -87, 0));  // 98


// Math.random() --> returns a random number between 0 (inclusive), and 1 (exclusive):

console.log("\n Random() method \n");

console.log(Math.random()); // 0.9218971138879655
console.log(Math.random()*10);  // 6.050478821352994
console.log(Math.floor(Math.random()*20));  // 5


// Math.trunc(x) --> returns the integer part of a x

console.log("\n trunc() \n");
console.log(Math.trunc(4.61));  // 4
console.log(Math.trunc(-99.81));  // -99

// Practice Time

// If the argument is a positive number, Math.trunc() is equivalent to Math.floor()
// Otherwise Math.trunc() is equivalent to Math.ceil()

