/*

WHAT WE WEILL SEE ?

>> Event Propagation (Event Bubbling and Event Capturing)
>> Higher Order Function
>> Callback Function
>> Function Currying (We will see after Async JS section)
>> CallBack Hell
>> JSON
>> AJAX call using XMLHttp request
>> Fetch API
>> Promises
>> Async-Await
>> Error Handling in JS

**********************************************************************************************************

** What is Event Propagation ?

>> Event Propagation determines in which order the elements receive the event.
>> There are two ways to handle this event propagation order of HTML DOM is 
Event Bubbling and Event Capturing.

>> byDefault it is Event Bubbling.


***************************************************************************************************************
** Bubbling -->

>> When an event happens on an element, it first runs the handlers on it,
then on its parent, then all the way up on other ancestors.

** stopping bubbling -->

>> if an element has multiple event handlers on the single event, then even if one of them stops the 
bubbling, the other ones still execute.

>> there is a method event.stopImmediatePropagation().

***************************************************************************************************************


** Capture Phase -->

>> Going from the window to the event target phase the events is 
first captured by the outermost element and propagated to the inner elements
>> capturing is also called "trickling"

*********************************************************************************************************


** Target Phase -->

>> the event reached the target element.

*********************************************************************************************************


** Higher Order Function --->

>> which takes another function as an arguments.

>> wo function jo dusre function ko as an argument accept krta h.


** CallBack Function --->

>> which get passed as an argument to another function .

>> jis bhi function ko hum kisi or function ke under as an arguments passed krte h 
than usko hum callback function kaihte h.

*/

const add = (a, b) => {
  // add = (a, b) is a CallBack fun.
  return a + b;
};

const sub = (a, b) => {
  // sub = (a, b) is a CallBack fun.
  return a - b;
};

const mul = (a, b) => {
  // mul = (a, b) is a CallBack fun.
  return a * b;
};

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

console.log(calculator(5, 2, add)); // Higher order fun

// ****************************************************************************************************

/*

>> HOW JS WORKS AND ASYNCHRONOUS JS

--> Hoisting in JS
--> Scope Chain
--> Lexical Scoping in JS
--> Use Strict Mode
--> This keyword
--> Closures in JS
--> What is ASYNCHRONOUS JS Programmign ?
--> What is Event Loop ?

*/

/* Hoisting --->

>> We have a creation phase and execution phase.

>> In JavaScript, a variable can be declared after it has been used.

>> In other words; a variable can be used before it has been declared.

>> hosting is avoided by using the let keywordd instead of var. (The other difference is that
 variables declared with let are local to the surrounding block, not the entire function.)

*/

console.log(myName);
var myName;
myName = "Robin";

// How it will be in output during creation phase

// 1: var myName = undefined;
// 2: console.log(myName);
// 3:myName = "Robin";

// *****************************************************************************************************

/*

** what is Scope Chain and Lexical Scoping in JS ?

>> The scope chain is used to resolve the value of variable names.

>> Scope chain in js is lexically defined, which means that we can see what the scope chain
will be by looking at the code.

>> Lexical Scoping means now, the inner function can get access to their parent functions variables
but the vice-versa is not true.

*/

// Example of laxical Scoping

let a = " Hello guys "; // global scope

const first = () => {
  let b = "How are you ?";

  const second = () => {
    let c = "\nHii, I am fine thank you 😀";
    console.log(a + b + c);
  };
  second();
  //   console.log(a + b + c); // We can't use c
};
first();

/*

** What is Closures in JS ?

>> A closure is the combination of a function bundled together (enclosed) with references to its 
surrounding state (the lexical environment).

>> In other words, a closure gives you access to an outer function's scope from an inner function.

>> closers are created every time a function is created, at function creation time. 

>> it same like lexical scoping

*/

// for better understanding closer then run on the console.

const outerFun = (a) => {
  let b = 10;

  const innerFun = () => {
    let sum = a + b;
    console.log(`The sum of two no is ${sum}`);
  };
  return innerFun;
};
const checkCloser = outerFun(5);
checkCloser();

/*

** SYNCHRONOUS JS -->

>> Synchronous means the code runs in a particular sequence of instructions given in the program.

>> Each instruction waits for the previous instruction to complete its execution.

*/

const fun2 = () => {
  console.log(`Function 2 is called`);
};

const fun1 = () => {
  console.log(`Function 1 is called`);
  fun2();
  console.log(`Function 1 is called again`);
};
fun1();

/*

** ASYNCHRONOUS JS -->

>> Asynchronous means that things can happen independently of the main program flow.

*/

const fun4 = () => {
  setTimeout(() => {
    console.log(`Function 4 is called`);
  }, 3000);
};

const fun3 = () => {
  console.log(`Function 3 is called`);
  fun4();
  console.log(`Function 3 is called again`);
};
fun3();

/* 
What is Event Loop in JS ?

>> Javascript engine has two parts, Heap and Call Stack. And the engine has some assistant named Web APIs and Callback Queue.

** HEAPS -->

>> It's an unstructured memory block. Our code's memory allocation happens here. 

** CALL STACK -->

>> We can consider Call Stack as a kitchen where all our code executed or cooked. Whenever we try to run 
a piece of code, it goes to call stack first and then executed. It works in LIFO style. That is Last In 
First Out.

*/

const lunch = () => console.log("It's time for lunch!");

const dinner = () => console.log("It's time for dinner!");

const breakfast = () => {
  console.log("Time to breakfast!");
  setTimeout(lunch, 3000);
  dinner();
};

breakfast();

/*

>> If we run the code above, The global execution context main() runs on the browser, and JS engine will 

start to read the code from the first line and will search for tasks. On the last line, one function is 

called. So, this function will go to the Call Stack and will execute the tasks. First it will print, 

(Time to breakfast!) 
then goes to the next line, where we have an asynchronous block of code.

>> As we know, JavaScript is synchronous and single-threaded language, this asynchronous block of code goes to the call stack and suddenly pops out. Here JS engine takes help from it's assistant, Web API.  

>> The setTimeout() waits on the Web API and after it's timer runs out (In this case, 3 seconds), After 3 seconds the callback function goes to the Callback Queue and waits for Call stack to be free. By this 
time, Call stack runs the other piece of codes. Prints

(It's time for dinner!)

** WEB APIs -->

>> Web API works as JS engines assistant. When JS engine have to deal with asynchronous code, it takes 

the help of Web API. Web API handles the blocking behavior of JavaScript code.

In this case, from our code above, we can say Web API will take the callback function

(setTimeout(lunch, 3000);)

, run it's timer, and pass it to Callback Queue after 3 seconds.

** CALLBACK QUEUE -->

>> It's a guard who monitors the stack of asynchronous callback functions who just completed the task of 

waiting and passed the gate of Web API. Callback Queue works using FIFO (First In First Out ) method. 

And now, they waits here to go back to Call Stack. But how will Call Stack know that there's some 

callback functions waiting in Callback Queue?

Here comes the star, Event Loop!

** EVENT LOOP -->

>> Event loop is just a guardian who keeps a good communication with Call Stack and Callback Queue. It 

checks if the call stack is free, then lets know the callback queue. Then Callback queue passes the 

callback function to Call stack to be executed. When all the callback functions are executed, the call 

stack is out and global execution context is free.

*/

/*

** Function Currying -->

>> Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

EX:- sum(5)(3)(8);

<< it takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, and so on, until all arguments are  completed.


*/

function sum(num1) {
  // console.log(num1); // 5
  return function (num2) {
    // console.log(num1, num2); // 5 3

    return function (num3) {
      // console.log(num1, num2, num3); // 5 3 8
      console.log(num1 + num2 + num3); // 16
    };
  };
}
sum(5)(3)(8);

// also write like this using fat arrow function...
const mult = (n1) => (n2) => (n3) => console.log(n1 * n2 * n3);
mult(5)(2)(4);

/* CallBack Hell -->

>>  Javascript allows us to pass functions as an argument to some other function. This property of Javascript is known as ‘Callback’.

>> Callback hell is a scenario where multiple Callbacks are nested together, one above the other.

*/

setTimeout(() => {
  console.log("Work is done");
  setTimeout(() => {
    console.log("Work is done");
    setTimeout(() => {
      console.log("Work is done");
      setTimeout(() => {
        console.log("Work is done");
        setTimeout(() => {
          console.log("Work is done");
          setTimeout(() => {
            console.log("Work is done");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);







// // 👉 JSON.stringify turns a JavaScript object into JSON text and
// stores that JSON text in a string, eg:

var my_object = { key_1: "some text", key_2: true, key_3: 5 };

var object_as_string = JSON.stringify(my_object);
// "{"key_1":"some text","key_2":true,"key_3":5}"

console.log(object_as_string);

typeof object_as_string;
// "string"


// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

var object_as_string_as_object = JSON.parse(object_as_string);
// {key_1: "some text", key_2: true, key_3: 5}

typeof(object_as_string_as_object);
// "object"



// //  AJAX Call using XMLHttprequest

// // how to handled with the events and callback

// // XMLHttpRequest (XHR) objects are used to interact with servers.
// // You can retrieve data from a URL without having to do a full
// // page refresh. This enables a Web page to update just part
// // of a page without disrupting what the user is doing.
// // XMLHttpRequest is used heavily in AJAX programming.
