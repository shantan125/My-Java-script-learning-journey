//console.log("hell there ");
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