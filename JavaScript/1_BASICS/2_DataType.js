/*  ---> Data Type in JavaScript <--- */

/*
    undefined: typeof instance === undefined
    Boolean: typeof instance === Boolean
    Number: typeof instance === Number
    String: typeof instance === String
    BigInt: typeof instance === BigInt
    Symbol: typeof instance === Symbol
 */

var num = 20;  // number
var myName = "Robin Kumar"; // String
var bool = true; // boolean

// way to know about which data type it is. For this we use(typeof Operator).
console.log(num + " is a \n" + typeof (num));
console.log(myName + " is a\n" + typeof (myName));
console.log(bool + " is a\n" + typeof (bool));

// Difference between null and undefined...
var useLess = null;
console.log(useLess); // null
console.log(useLess + " is a\n" + typeof (useLess)); // print object and it is a Bug in JS


var standBy; 
console.log(standBy); // undefined
console.log(standBy + " is a\n" + typeof (standBy)); // undefined


// DataTypes Practice...
console.log("DataTypes Practice..."); 
console.log(10 + "20"); // 1020
console.log(9 - "5"); // 4 (Bug)
console.log("Java " + "Script"); // Java Script
console.log("   " + "   "); 
console.log("   " + 0); //  0
console.log("Robin" - "Kumar"); // NaN(not a number)
console.log(true + true); // 2 ( true return 1 and false return 0 )
console.log(true + false); // 1
console.log(false + true); // 1
console.log(false - true); // -1

console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(Number.isNaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

