// Operators in JS...

/* TYPES OF OPERATORS...
   1. Assignment Operators
   2. Arithmetic Operators
   3. Comparison Operators
   4. Logical Operators
 */

// 1. Assignment Operators(=)...
console.log("Assignment Operators(=)...");
var x = 5;
var y = 5;
console.log(x,y);


// 2. Arithmetic Operator...
console.log("Arithmetic Operator..");
console.log(3+4);
console.log(10-5);
console.log(20/5);
console.log(5*6);
console.log("Reminder " + 20%3);

// Increment and Decrement Operator...
var num = 10;

console.log("Increment and Decrement Operator...");
console.log(num); // 10
console.log(num++); // 10
console.log(++num); // 12
console.log(num--); // 12
console.log(--num); // 10

// Exponentiation Operator(**)
console.log(3**3);



// 3. Comparison Operator...
var a = 30;
var b = 10;

console.log("Comparison Operator..");
// Equal (==)
console.log(a == b);

// Not equal (!=)
console.log(a != b);

// Greatethan (>)
console.log(a > b);

// Greater than or equal (>=)
console.log(a >= b);

// Less than (<)
console.log(a < b);

// Less than or equal (<=)
console.log(a <= b);


// 4. Logical Operators(&&, ||, !)
var n = 20;
var n1 = 40;

console.log("Logical Operators...");

// AND Operator (&&)
console.log(n < n1 && n1 > 0);

// OR Operator (||)
console.log(n > n1 || n > 10);

// NOT Operator (!)
console.log(!(n > n1));


// PRACTICE..

// WAP to swap two numbers without using third variable!
var num = 10;
var num1 = 20;

num = num + num1; // num = 30;
num1 = num - num1; // num1 = 10
num = num - num1; // num = 20;
console.log("The value of num is : " + num);
console.log("The value of num1 is : " + num1);


// Difference between (==) VS (===)?
var no = 5;
var no1 = '5';

console.log(no == no1); // only check value output (true)
console.log(no === no1); // check value + datatype output (false)

