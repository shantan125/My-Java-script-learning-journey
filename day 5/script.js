//console.log("hello there ");
//console.log(window);
/*window is a global object which consist of lot of functions and methods*/
// dom is a way of accessing js*/
//console.log(document.body);





//here we are writing a cod ethat changes the text in the boxes


//this lines says we arre reading all the elements in that have class = box
//this also form a node list which is similar to array 
let divs = document.querySelectorAll(".box");
//these lines are used to print the each element in the node list.
//it is same like printing each element in an array based on the index position
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);
//these 3 lines say's that we are changing the inner text of the boxes 
divs[0].innerText = "Hey this is box 1";
divs[1].innerText = "Hey this is box 2";
divs[2].innerText = "Hey this is box 3";

// to change the css style of an element by js we can 

//here we are changing the color of h1 element from red to  blue
let c = document.querySelector("h1");
c.style.color="blue";


// GET ATTRIBUTE AND SET ATTRIBUTE

// DOM (Document Object Model) provides the interface for interacting with HTML documents.

// getAttribute is used to retrieve the value of a specified attribute on an HTML element.

// Syntax of getAttribute: var attributeValue = element.getAttribute(attributeName);

// Example:
// <div id="exampleDiv" data-info="123">Some content</div>
// var infoAttributeValue = element.getAttribute('data-info');
// Outputs: 123

// setAttribute is used to set the value of a specified attribute on an HTML element.

// Syntax of setAttribute: element.setAttribute(attributeName, attributeValue);

// Example:
// <div id="exampleDiv">Some content</div>
// element.setAttribute('data-info', '456');
// After the setAttribute operation, HTML becomes: <div id="exampleDiv" data-info="456">Some content</div>

// These methods are commonly used for dynamic manipulation of HTML elements in web applications.


//here we are changing the attribute of the h1 element
let d = document.querySelector("h4");
d.setAttribute("class","heading");

// to check the output open your html page in a chrome app and rightclick the page and click on inspect then you can see the changes in the console tab
//now let us perform on get attribute
let e = document.querySelector("h4");
console.log(e.getAttribute("class"));
//output would be heading

//now let us perform on set attribute
let f = document.querySelector("h1");
f.setAttribute("class","heading");
console.log(f.getAttribute("class"));
//output would be heading

