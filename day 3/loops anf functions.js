let marksheet={
    shantan: 900,
    salman: 800,
    alan: 790,
    vijay: 850,
    deepak: 632
}
//let us create a for loop that iterates through every key in the object
//object.keys(marksheet).length
//object.key(marksheet)
//creates an array to iterate through every element in the array 
//.length will count the length of the array
for (let i=0;i<Object.keys(marksheet).length;i++){
    console.log(" the marks of "+ Object.keys(marksheet)[i]+ " is " +marksheet[Object.keys(marksheet)[i]])

}

let salary={
    shantan: 40000,
    salman:25000,
    vijay:30000,
    alan:40000
}
for (i=0;i<Object.keys(salary).length;i++){
    console.log('the salary of '+Object.keys(salary)[i]+' is '+salary[Object.keys(salary)[i]]);
}
 let rent={
    shantan:2000,
    salman:3000,
    vijay:800,
    alan:900
 }
 //for is aloop
 // for(let i in rent)====>(let key in object) 
// for(let i in rent) means iterate through every key in the object
 //here i is the key and rent[i] is the value
 for(let i in rent){
    console.log('THE RENT PAID BY '+  i  + ' is ' + rent[i]);
 }

 //write a program to tell try again until the user enters the correct answer

//prompt is not supported by node js so find an alternative to run the code

 //let cn =20;
 //let j =0;
 //while(j!==cn){
   //  j = parseInt(prompt("enter the correct number:"));

 //}
 //console.log("you entered a correct number");

 
// creating a function to calculate mean value for 4 numbers
const fourmean=(a, b, c, d)=>{
    return(a+b+c+d)/4
}
console.log(fourmean(5, 4, 6, 7));













