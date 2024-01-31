const student={
    fullname:"Yeddula Shantan",
    marks: 78,
    printmarks: function(){
        console.log("marks = ",this.marks); //here we use this to refer this object or place where it is present or we can refer it as each individual object
    },
};
//emp means employee and function to be performed in all employee data
const emp={
 calctax(){
console.log("the tax rate is 10%");
}};

const sunny = {
salary:10000,
};
//to create a prototype we use this syntax :  sunny.__proto__
sunny.__proto__=emp;
//to check the output output open the index.html in the browser then right click on scrren>inspect>console 
//there type sunny there you will see salary if you see down under prototyper there u can find the calctax

//instead of writing calctax function for every employee we can assign a prototype
//this calctacx now can be invoked directly
const sunny2 ={
    salary : 60000,
};
const sunny3 ={
    salary : 60000,
};
const sunny4 ={
    salary : 90000,
    calctax(){
        console.log("The tax rate is 20%");
    }
};
//here we are assigning a prototype for each employee details
sunny2.__proto__=emp;
sunny3.__proto__=emp;
sunny4.__proto__=emp;

//the example for prototyping can be array.push(), array.pop()all these functions such as push,pop e.t.c.....are all example of prototypes
//prototype is a reference of an object or address of an object

//if object and prototype has same method then object method will be used because object is specific
//for emp sunny4 his salary is higher so he has to pay more tax then we create a function in sunny4 so that the function in the object will be called..

//classes in the js
//class is a program code template for creating objects
/*objects has state(variable) and have behaviour(functions) inside it
class myclass{
    constructor(){.....}
    my method(){.......}
}
let newobjname = new myclass();

when we want to create bulk amount of similar objects then we use class to create it
class give us template or blueprint to create a object
*/ 
class toyota{
    start(){
        console.log("The car is Started");
    };
    stop(){
        console.log("the car is stoped");
    };
    settype(type){
        this.cartype=type;
    }
}
let fortuner = new toyota();
fortuner.settype('OffRoad');
let innova = new toyota();
innova.settype('comfort/family vehicle');

/*constructor is a special key word
constructor () method is automatically invoked by new means automatically a constructoe=r will be created
constructor is used to intialize the object

 */
