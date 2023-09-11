// Control Statement & Loops

/* --> CONTROL STATEMENTS...
--> if..else
--> Switch Statement
--> Conditional(ternary operator)

---> LOOPS...
--> while loop
--> do-while loop
--> for loop
--> for in loop
--> for of loop
--> 
 */

// ---> if..else

console.log("if..else statements...");
var year = 2023;

if (year % 4 === 0) {

    if (year % 100 === 0) {

        if (year % 400 === 0) {
            console.log("The year " + year + " is a leap year");

        } else {
            console.log("The year " + year + " is not a leap year");
        }

    } else {
        console.log("The year " + year + " is a leap year");
    }

} else {
    console.log("The year " + year + " is not a leap year");
}


// What is falsy value in JS?

// We have total 5 falsy values in JS ---> 0,"", undefined, null, NaN, is falsy value

if (score = 0) {
    console.log("we loss the game");
} else {
    console.log("we won the game");
}


// --> Conditional(ternary operator)

var age = 18;

console.log((age >= 18) ? "You can vote" : "You can't vote");



// --> Switch Statement..

console.log("Switch Statements..");
var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;

switch (area) {
    case 'circle':
        console.log("The area of the circle is :" + PI * r ** 2);
        break;
    case 'triangle':
        console.log("The area of the triangle is :" + (l * b) / 2);
        break;
    case 'rectangle':
        console.log("The area of the rectangle is :" + (l * b));
        break;

    default:
        console.log("Please enter valid data!!");
        break;
}


// LOOPS --->

// --> while loop

console.log("while loop..");
var numb = 1;

while (numb <= 10) {
    console.log(numb);
    numb++;
}


// ---> do-while loop

console.log("do-while loop..");
var nom = 10;

do {
    console.log(nom);
    nom--;
} while (nom > 0);


// ---> for loop

console.log("for loop...");
var nn = 10;
var sum = 0;

for(var i = 0 ; i <= nn ; i++){
    sum += i;
}
console.log(sum);

