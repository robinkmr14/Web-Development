// Date and Time in JS

/*
>> Date objects represent a single moment in time in a platform-independent format.
>> Date objects contain a Number that represent milliseconds since 1 jan 1970 UTC.
*/

/* Creating date objects

     There are 4 way to create a new date object:-

       1. new Date()
       2. new Date(year,month,day,hours,minutes,seconds,ms)
       3. new Date(date string)
       4. new Date(milliseconds)
 */


/* new Date()
>> Date objects are created with the new Date() constructor.
*/
console.log("\ncreating new date() object..\n");


let currDate = new Date();
console.log(currDate);  // 2023-06-18T19:30:45.517Z


// toLocaleString() method
console.log(new Date().toLocaleString());  // 19/6/2023, 1:04:47 am


// toString() method
console.log(new Date().toString());  // Mon Jun 19 2023 01:05:21 GMT+0530 (India Standard Time)


/* Date.now() method
 >> returns the numeric value corresponding to the current time-the number of milliseconds
 since jan 1, 1970 00:00:00 UTC.
 */
console.log("\nDate.now() method..\n");

console.log(Date.now()); // 1687117395629



/* new Date(year,month,day,hours,minutes,seconds,ms)
>> NOTE:- JavaScript counts months from 0 to 11 where january is 0 , December is 11. 
*/
console.log("\n new Date(year,month,day,hours,minutes,seconds,ms)\n");

let date = new Date(2023, 5, 19, 1, 24, 20, 30);
console.log(date.toLocaleString());  // 19/6/2023, 1:24:20 am



// new Date(date string) --> creates a date object from a date string:
console.log("\nnew Date(date string) method..\n");

let newDate = new Date("June 19, 2023 1:31:20");
console.log(newDate.toLocaleString());  // 19/6/2023, 1:31:20 am



// new Date(milliseconds) --> creates a new date object as milliseconds plus zero time:
console.log("\nnew date(milliseconds)..\n");

let dateMilli = new Date(0);
console.log(dateMilli.toLocaleString());  // 1/1/1970, 5:30:00 am

let dateM = new Date(1687118994489);
console.log(dateM.toLocaleString());  // 19/6/2023, 1:39:54 am

let dt = new Date(100000000000);
console.log(dt.toLocaleString());  // 3/3/1973, 3:16:40 pm

let d = new Date(-100000000000);
console.log(d.toLocaleString());  // 31/10/1966, 7:43:20 pm

const dd = new Date(24 * 60 * 60 * 1000);
console.log(dd.toLocaleString());  // 2/1/1970, 5:30:00 am



// Dates Methods
console.log("\nDates Methods\n");


// How to get the individual date
console.log("\nHow to get the individual date..\n");

let currD = new Date();

console.log(currD.toLocaleString());  // 19/6/2023, 1:49:17 am
console.log(currD.getFullYear());  // 2023
console.log(currD.getMonth());  // 5
console.log(currD.getDate());  // 19
console.log(currD.getDay());  // 1



// How to set the individual date
console.log("\nHow to set the individual date..\n");

const dtt = new Date();
console.log(dtt.setFullYear(2020, 11, 3)); // 1606941297857
console.log(dtt.setMonth(11));  // 1606941297857
console.log(dtt.setDate(19));  // 1606941297857 



// Time Methods
console.log("\nTime Method..\n");

// How to get the individual Time
console.log("\nHow to get the individual Time..\n");

let Time = new Date();

console.log(Time.getTime());   // 1687121243227
// The getTimme() method returns the number of milliseconds.

console.log(Time.getHours());  // 2
// The getHours() method returns the hours of a date as a number (0 - 23).

console.log(Time.getMinutes());  // 17
console.log(Time.getSeconds());  // 23
console.log(Time.getMilliseconds());  227



// // How to set the individual date
console.log("\nHow to set the individual date..\n");

let currTime = new Date();

console.log(currTime.setTime(1687121243227));  // 1687121243227
console.log(currTime.setHours(2));  // 1687121243227
console.log(currTime.setMinutes(17));  // 1687121243227
console.log(currTime.setSeconds(23));  // 1687121243227
console.log(currTime.setMilliseconds(300)); // 1687121243300





// PRACTICE..

// Only for Time..
console.log(new Date().toLocaleTimeString()); // 2:34:27 am

// Only for Date..
console.log(new Date().toLocaleDateString());  // 19/6/2023

// Date and Time both..
console.log(new Date().toLocaleString());  // 19/6/2023, 2:35:21 am
