/* Functions in JS

--> Function Definition
--> Calling Function
--> Function Parameter
--> Function Arguments
--> Function expressions
--> Return keyword
--> Anonymous Function
.
 */


// Function

// Function definition
function sum() {
    var N1 = 10;
    var N2 = 20;
    var total = N1 + N2;
    console.log(total);
}

sum(); // calling function

// function with parameters
function circle(r) {
    var PI = 3.142;
    var result = PI * r ** r;
    console.log(result);
}

// calling and passing arguments
circle(10);


// Function expression and return keyword
function multiply(x, y) {
    return x * y;
}
var myExp = multiply(10, 20); // Function expression 
console.log(myExp);


// Anonymous function
var anonymousFun = function substract(n, n1) {
    return n - n1;
}

console.log(anonymousFun(50, 20));


// Immediately invoke function expression 

(function(){
    console.log("This function never execute again!!");
})()


/* setTimeOut and setInterval

setTimeOut --> Run function "once" after "interval" of time

setInterval --> Run function repeatedly, Starting after the interval of time, then repeating.....
*/

// setTimeOut(function, delay, arg1, arg2....)

function greeting() {
    console.log("This is setTimeOut");
}
setTimeout(greeting,3000); // 3000ms = 3sec.


// setInterval(function, delay, arg1, arg2....)

setInterval(greeting,5000);