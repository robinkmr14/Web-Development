/*
--> Escape Character
--> Finding a String in a String
--> Searching for a String in a String
--> Extracting String Parts
--> Replacing String Content
--> Extracting String characters
--> Other useful methods

>> String is a zero or more characters written inside quotes.
>> String are used for storing and manipulating text.
>> You can use single or double quotes.
 */

let myName = "Robin Kumar";  // Double quotes
let name = 'Yadav';   // Single quotes



// How to find the length of a string
// String.prototype.length

console.log("\nlength of a string\n");
console.log(myName.length);



// Escape Character
console.log("\nEscape Character\n");

let anySentence = "We are the so-called \"Vikings\" from the north";
console.log(anySentence);



/*
Finding a String in a String

>> indexOf(searchValue, fromIndex) here indexOf() method
returns the index of ( the position of ) the first occurrence of a specified text in a string 
>> Both indexOf(), and lastIndexOf() return -1 if the text is not found:
 */
console.log("\nFinding a String in a String\n");

const myBio = "I am Robin Kumar";
console.log(myBio.indexOf("Robin"));


// lastIndexOf(searchValue, fromIndex) 
const text = "Please locate where 'locate' occurs!";
console.log(text.lastIndexOf("locate"));



/* Searching for a String in a String

>> The search() method searches a string for a string 
(or a regular expression) and returns the position of the match
>> The search() method cannot take a second start position argument.

*/
console.log("\nSearching for a String in a String\n");

const text1 = "Please locate 'where' locate occurs!";
console.log(text1.search("where"));




/*  Extracting String parts
>> There are 3 method for extracting a part of a string
        1. slice(start, end)
        2. substring(start, end)
        3. substr(start, length)
 */
console.log("\nExtracting String parts\n");


/* Slice() Method 
>> slice() extracts a part of a string and returns the extracted part in a new string.
>> The method takes 2 parameters: start position, and end position (end not included).

*/
console.log("\nSlice() Method\n");

let str = "Robin";

console.log(str.slice(2)) // bin
console.log(str.slice(2, 4)) // bi
console.log(str.slice(0, -3)); //Ro



/*  substring() 

>> substring() is similar to slice().
>> The difference is that substring() cannot accept negative indexes.
>> If we give the negative value then the characters are counted from the 0th position.
 */
console.log("\nsubstring...\n");

let str1 = "Apple, Banana, Kiwi";

let res = str1.substring(0, 4);
console.log(res); // Appl

let rest = str1.substring(8, -2);
console.log(rest); // Apple, B



/* substr(start, length)

>> substr() is similar to slice().
>> The difference is that the second parameter specifies the length of the extracted part.
 */
console.log("\nsubstr()...\n");

let subS = "Apple, Banana, Kiwi";

let st = subS.substr(7, 6);
console.log(st); // Banan

let stt = subS.substr(-4);
console.log(stt);  // Kiwi



/* Replacing String Content --> {replace(replaceFor, replaceWith)}

>>  The replace() method replaces a specified value with another value in a string.
>>  The replace() method does not change the string it is called on.
>>  The replace() method returns a new string.
>>  The replace() method replaces only the first match.
>>  By default, the replace() method replaces only the first match.
>>  By default, the replace() method is case sensitive.
>>  In 2021, JavaScript introduced the string method replaceAll()
*/
console.log("\nReplacing String Content\n");

let nam = "I love cats. Cats are very easy to love. Cats are very popular";

let cNam = nam.replace("cats", "Dogs")
console.log(cNam);

let ChangeNam = nam.replaceAll("love", "carry");
console.log(ChangeNam);
console.log(nam); // no change in string




/* Extracting String characters

>> Three method for Extracting 
        1. charAt(position)
        2. charCodeAt(position)
        3. Property access []
 */
console.log("\nExtracting String Characters\n");


/* charAt(position)
>> The charAt() method returns the character at a specified index (position) in a string.
*/
console.log("charAt()..\n");

let chAt = "Hello Everyone Good Morning";

let ch = chAt.charAt(0);
console.log(ch); // H



/* charCodeAt(position)

>> The charCodeAt() method returns the unicode of the character at a specified index in a string:
>> The method returns a UTF-16 (16-bit Unicode Transformation Format) code (an integer between 0 and 65535).
*/
console.log("\ncharCodeAt() method..\n");

let charCode = chAt.charCodeAt(2);
console.log(charCode); // 108

// how to print unicode of the last character in a string
let lastChar = chAt.charCodeAt(chAt.length - 1);
console.log(lastChar); // 103




/* Property access []

>> ECMAScript 5 (2009) allows property access [ ] on strings:
 */
console.log("\nProperty access [] method..\n");

let Prpty = "Hello EveryOne";
console.log(Prpty[1]); // e





// Other useful methods

// >> A string is converted to upper case with toUpperCase():
console.log("\nconverted to upper case..\n");

let nm = "robin";

let upper = nm.toUpperCase();
console.log(upper); // ROBIN


// A string is converted to lower case with toLowerCase():
console.log("\nconverted to lower case..\n");

let naam = "KUMAR";

let lower = naam.toLowerCase();
console.log(lower);




// concat() --> joins two or more strings:
console.log("\nconcat() method..\n");

let fName = "Robin";
let lName = "Kumar";

let con = fName.concat(lName);
console.log(con);  // RobinKumar

let conCat = fName.concat(" ",lName);
console.log(conCat); // Robin Kumar




// trim() method --> removes whitespace from both sides of a string:
console.log("\ntrim() method..\n");

let trm = "             Robin           ";

let newTrm = trm.trim();
console.log(newTrm); //Robin


// include() method --> means any word exist in the sentence or not. (return-> true / false)
console.log("\ninclude() method...\n");

console.log(trm.includes("Robin"));



// split() method --> Converting a String to an Array

console.log("\nsplit() method..\n");

let txt = "a, b,c, d | e, f"; // String
 
console.log(txt.split(","));   // split on commas
console.log(txt.split(" "));  // split on spaces
console.log(txt.split("|"));  // split on pipe

