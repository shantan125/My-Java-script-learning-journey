//functon - block of code to perform a specific task
//these functions can be reused in any part of the code
//we write the input to be taken in parenthasis
//     function functionname(parameter1, parameter2,....parameter n){
//            ---   block of the code ---
//     }
function add(a,b){
    console.log("Here we print the addition of a and b element:");
    return a+b;
}
//the code written after "return" statement will not work
let a=20;
let b=30;
console.log(add(a,b));// here function is called to print the output
//function decrease the reduandancy of the code(means decreasing repeating of the code)


//ARROW FUNCTION ?

//it is a compact way of writing the function
// SYNTAX:

// here we use (parameters)=>{ block of code}
//we store this function in a variable and this variable should have a constant variable OR IF YOU WANT TO CHANGEYOU CAN USE LET.
//use = to assign the variable to a function
//this arrow function is a part of the modern java script

//const sum=(a, b)=>{
// return a+b;           -------BLOCK OF THE CODE ----------
// }
const substract = (a,b)=>{
console.log("the substraction of two elements is:");
    return a-b;
}
let c = 33;
let d = 3;
console.log(substract(c,d));


const st =(arr)=>{
console.log(arr.length);
}
let str ="there";
console.log(st(str));

//lets create a funtion that takes string as input and count vowels in the string

function countvowels(str){
    count = 0;//to count the vowel
    for(const character of str){
        if(
            character === "a"||
            character === "e"||
            character === "i"||
            character === "o"||
            character === "u")
            {
                count++
            }

    }
 console.log(count);
}   
let sr = "aeiou";
console.log(countvowels(sr));

//creating an arrow function for the same task

//const = vowcnt=(str) =>{----block of code------}

//for each loop in arrays

//-----syntax---------
//arr.forEach(callbackfunction)

//callback function is afunction tht executes for each element in the array

let br =[1,2,3,4,5,6]
br.forEach((vel)=>{
    console.log(vel);
});


//created a function where each city name length is counted
let cities =["hyderabad","vijayawada","kurnool","kadapa"]
cities.forEach((city)=>{
    console.log( st(city));
}); 

let dr=[1,2,3,4,5];
dr.forEach((digi)=>{
console.log(digi*digi);
});


 // map method
 //arr.map(callbackfnx(value, index, array))
// similar to foreach
//but map creates a new array that will have output
//array.map((val)=>{---block of the code---});
// map is used to create a new array using some returned value based on each value which is stored at the individual indices of array
let newAr = [7, 8, 9, 10, 11];

let newaaray = newAr.map((sal)=>{
    return sal*sal;
}
)
console.log(newAr);
console.log(newaaray);

//FILTER METHOD
// it is a method to filter values in an array based on some values 
//lets filter an array where we get only the elemnts that are divisible by 2 in an new array

let gr=[45,44,46,75,11,72,19];
let asr= gr.filter((asal)=>{
    return asal%2==0;
});
console.log(gr);
console.log(asr); 

//reduce method
//arr.reduce();
//perform some operation and reduces the array to  single value and it returns the single value
//array=[1, 2, 3, 4];
//array.reduce((res,curr)=>{
// return res+cur;
//});
//maximum of an array
let arrayz=[14, 12, 31, 45, 35];
let arrayy=arrayz.reduce((res,curr)=>{
 return res>curr ? res:curr;
});
console.log(arrayz);
console.log(arrayy);
 
//filter out the marks of student who scored marks more than 75

let marksx =[77, 65,87, 69, 82, 64, 54 ,98, 72];
let Amarks = marksx.filter((mark)=>{
    return mark>75;
});
console.log("the marks of all students is: ",marksx);
console.log("marks of student who scored more than 75 are: ",Amarks);
