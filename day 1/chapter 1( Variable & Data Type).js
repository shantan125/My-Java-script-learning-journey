console.log("hello this is my first js program");
let a = 57;
console.log(a)
a = "shantan"
console.log(a)
//let vs var vs constant
//var-block scoped
var h ="abc";
{
    var h = "xyz";
    console.log(h);
}
console.log(h);
//let-globally scoped
let g = "fun";
{
    let g="bun";
    console.log(g);
}
console.log(g);
//constant
const author = "shantan";
//author ="sunny";-----> throws an error

// primitive data types
//there are 7 primitive data types
//NNBBSSU(NULL NUMBER BOOLEAN BIG_INT STRING SYMBOL UNDEFINED)
let p = null;
let q = 223;
let r = true;
let s = BigInt(223242343243444443123118447);
let t = "shantan yeddula";
let u = Symbol("))::((");
let v = undefined;
console.log(p, q, r, s, t, u, v);
//pgm to display the data type of given value
console.log(typeof p);
console.log(typeof q);
console.log(typeof r);
console.log(typeof s);
console.log(typeof t);
console.log(typeof u);
console.log(typeof v);
//object- it is a non primitive datatype
// it is a key:value pair
// syntax:
//const items{
//  key:value,
//  key:value
//           }
//can be similar to dictionary in python 
const item = {
    "shan":219,
    "tan": false,
    "xxx": undefined
}
console.log(item["shan"])
console.log(item["tan"])
console.log(item["xxx"])