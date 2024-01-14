//there are three conditional statements they are :
// if...statement
//if else .... stATEMENT
//if....else if.....statement
//ternary operator

// if statement
let a = 18;
if(a >= 18){
    console.log("You are a major.");
}

//if else statement
let b = 16;
if (b >=18){
    console.log("You are a major");
    }else{
    console.log("you are not a major");
}

//if...elseif statement

let age = 41;
if (age > 18 && age < 40){
    console.log("Major");
}else if(age < 18){
    console.log("Minor");
}else if(age>60){
    console.log("Old person")
}else{
    console.log("Middle age")
}

//ternery operators
//condition ? value if true:value if flse

let Age = 22;
const res = (age > 18)? "major":"minor";
console.log(res);


