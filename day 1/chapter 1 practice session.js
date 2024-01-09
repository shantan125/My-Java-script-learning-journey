//chapter 1 practice session 
//code with harry(youtube)

// create  a variable of type string and try to add number

let a ="shantan";
b = 87;
console.log(a+b)

//answer:   shantan87

// now use typeof and find the datatype of previous one 

console.log(typeof(a+b))

//answer will be: STRING

//create a object in JS now try to hold a number for the same object value, Here say value A can be used to create a object now use A to store number value after creating a object.

const vim = {
    name:"shantan",
    section : 1
}
//let vim = 1;===============> draws an error
 console.log(vim);

 // try to add new key and value to the object i.e: friend:salman

 vim["friend"] = "salman"
  console.log(vim);//added the key and value to the object
  vim["name"] = "deepak"
   console.log(vim);//updated or changed the name value from shntan to deepak

// create a dictionary kind of thing for 3 words
const dict={
    alter: "change",
    pingme:"message me",
    yakka:"hardwork"
}
console.log(dict)
console.log(dict.alter)


