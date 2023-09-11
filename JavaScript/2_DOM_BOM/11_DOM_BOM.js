/* What We Will Do ..?

    --> Window VS Document
    --> DOM(Document Object Model) vs BOM (Browser Object Model)
    --> DOM Navigation
    --> Searching and getting Elements Reference
 */

/* Window:
 >> represents the browser window or tab that contains the "web page".

 >> acts as the "global object" for JavaScript in that particular window or tab.

 >> provides various properties and methods for controlling and interacting with the browser window.

 >> such as manipulating the size and position of the window, opening new windows or tabs,
accessing the browser's history, setting timeouts or intervals, etc.

* Document:
 >> is a property of the "window" object and represents the web page or 
document being displayed in the browser window. 

 >> It provides access to the content and structure of the web page, 

 >> allowing JavaScript to manipulate and interact with the HTML elements,
styles and other components of the page.

 >>  The "document" object exposes properties and methods for accessing
and modifying elements, creating new elements, handling events, changing
styles and classes, modifying the structure of the document, etc.


* BOM (Browser Object model):
>> deals with browser components aside from document, 
like  navigator, Screen, location, frames, history and so on..


* DOM Navigation:
>> DOM navigation refers to the process of traversing and accessing different
elements within the Document Object Model (DOM) structure of a web page. 

    Here are some common methods and properties used for DOM navigation:-

    >>   1. getElementById: This method allows you to access
        an element in the DOM using its unique ID attribute.

    >>  2. getElementsByClassName: This method returns a collection 
        of elements that have a specific class name.

    >>    3. getElementsByTagName: This method returns a collection of
        elements with a specific tag name (e.g., "div", "p", "a").

    >>    4. querySelector: This method allows you to select elements using
        CSS selectors. It returns the first matching element.

    >>    5. querySelectorAll: This method returns a NodeList containing all
        elements that match a given CSS selector.

    >>    6. parentNode: This property gives you access to the parent node of an element.

    >>    7. childNodes: This property returns a NodeList of all child nodes
        (including text nodes, element nodes, etc.) of an element.

    >>    8. firstChild: This property gives you access to the first child node of an element.

    >>    9. lastChild: This property gives you access to the last child node of an element.

    >>    10. nextSibling: This property gives you access to the next sibling node of an element.

    >>    11. previousSibling: This property gives you access to the previous sibling node of an element.






** FINDING HTML ELEMENTS...                           
    >> document.getElementById(id)	-->  Find an element by element id

    >> document.getElementsByTagName(name) --> 	Find elements by tag name

    >> document.getElementsByClassName(name) -->	Find elements by class name  

    >> document.querySelectorAll --> Finding HTML elements by CSS selectors.

    >> document.getElementsByName(name) --> Finding element by name.


** CHANGING HTML ELEMENTS...
    >> element.innerHTML =  new html content -->  Change the inner HTML of an element

    >> element.attribute = new value -->  Change the attribute value of an HTML element

    >> element.style.property = new style -->  Change the style of an HTML element

    >> element.setAttribute(attribute, value) -->  Change the attribute value of an HTML element



** ADDING AND DELETING ELEMENTS...
    >> document.createElement(element) --> 	Create an HTML element

    >> document.removeChild(element) -->  Remove an HTML element

    >> document.appendChild(element) -->  Add an HTML element

    >> document.replaceChild(new, old) --> Replace an HTML element

    >> document.write(text) -->  Write into the HTML output stream



** FINDING HTML OBJECTS
     
    >>  document.anchors -->	Returns all <a> elements that have a name attribute	(1).

    >>  document.applets -->	Deprecated	(1).

    >>  document.baseURI -->	Returns the absolute base URI of the document	(3).

    >>  document.body -->	    Returns the <body> element	(1).

    >>  document.cookie -->	    Returns the document's cookie	(1).

    >>  document.doctype -->    Returns the document's doctype	(3).

    >>  document.documentElement -->	Returns the <html> element	(3).

    >>  document.documentMode -->	Returns the mode used by the browser	(3).

    >>  document.documentURI -->	Returns the URI of the document	(3).

    >>  document.domain --> 	Returns the domain name of the document server	(1).

    >>  document.domConfig -->	Obsolete.	(3).

    >>  document.embeds -->	 Returns all <embed> elements	(3).

    >>  document.forms -->   Returns all <form> elements	(1).

    >>  document.head -->	 Returns the <head> element	(3).

    >>  document.images -->	 Returns all <img> elements	(1).

    >>  document.implementation -->	Returns the DOM implementation	(3).

    >>  document.inputEncoding -->	Returns the document's encoding (character set)	(3).

    >>  document.lastModified -->	Returns the date and time the document was updated	(3).

    >>  document.links -->	 Returns all <area> and <a> elements that have a href attribute	(1).

    >>  document.readyState -->	Returns the (loading) status of the document	(3).

    >>  document.referrer -->	Returns the URI of the referrer (the linking document)	(1).

    >>  document.scripts -->	Returns all <script> elements	(3).

    >>  document.strictErrorChecking -->	Returns if error checking is enforced	(3).

    >>  document.title -->	Returns the <title> element	(1).

    >>  document.URL -->	Returns the complete URL of the document	(1).

*/

// Getting HTML element/s using querySelector/All

// QuerySelector returns "First element" that match CSS Selector

// To get all matched elements we use querySelectorAll




// let resultendElement = document.querySelector('p');
let resultendElement = document.querySelectorAll("p");
console.log(resultendElement);

let byClass = document.querySelector(".WhiteHat");
console.log(byClass);

let byId = document.querySelector("#code");
console.log(byId);

// Other way to get HTML elements

// get element by tagName

let byTagName = document.getElementsByTagName("p");
console.log(byTagName);

// get element by id

let byIdName = document.getElementById("code");
console.log(byIdName);

// get element by className

let byClassName = document.getElementsByClassName("WhiteHat");
console.log(byClassName);

// Updating and Changing the content

// innerText
// Ignore spaces

let heading = document.querySelector("h1");
heading.innerText += "<p>This is innerText</p>";
console.log(heading.innerText);

// InnerHtml
// It does not ignore spaces

let head = document.querySelector(".WhiteHat");
head.innerHTML = "<p>This is innerHTML</p>";
console.log(heading.innerHTML);

// Getting and Setting attribute of element

// Get the attribute
let blackHatLink = document.querySelector("a");
console.log(blackHatLink.getAttribute("href"));

// Set the attribute
blackHatLink.setAttribute(
  "href",
  "https://www.youtube.com/watch?v=5Qg_NS-Tw0U&list=PLwXA3FwPcGNArEJxlPElAX2ivDz2gEYs8"
);
console.log(blackHatLink.getAttribute("href"));
blackHatLink.innerHTML = "blackHar Jr. video";

// Adding the style

let hding = document.querySelector("h1");
hding.style.color = "Red";
hding.style.backgroundColor = "blue";

// Add, remove and replace class of element

// Add the class

let headng = document.querySelector("h2");
headng.classList.add("newClass");

// Remove the class
headng.classList.remove("newClass");

// Replace the class
headng.classList.replace("WhiteHat", "BlackHat");

// Parent, Children and Sibling elements

let parentElement = document.querySelector(".content");
// All Children of Parent
console.log(parentElement.children);

// We cannot run forEach method on HTMLCollection so first convert it into array
console.log(Array.from(parentElement.children));

// Child Element

let childElement = document.querySelector("h2");
// Find the parent of specific Child
console.log(childElement.parentElement);

// Find next/previous Sibling of Child
console.log(childElement.nextElementSibling);
console.log(childElement.previousElementSibling);
