//Syntax:
//let array_name=[item1, item2, item3]
// array consist of items that are same datatype
let marks = [70, 74, 87, 98 ]
console.log(marks);
console.log(marks.length);
let heroes =['ironman','hanuman','heman','shktiman'];
console.log(heroes)
console.log(typeof marks);
//array indices -plural form of index is called indices
console.log(marks[5]);//its output would be undefined because the array size is 4 and it only have 4 integers in marks
console.log(marks[4]);//array index value starts from zero so its ouput is also undefined
console.log(marks[3]);//98
//strings in js is immutable except in array means we can change value of string in array["string1", "string2"];
//looping over array
n=heroes.length;//intializing the n value with legth of heroes array
for(let i = 0;i<=n-1;i++){//loop start from index iterats till n-1 element by incrementing
    console.log(heroes[i])//print every element in the array
}
// for of

let cities=["htyderabad", "bengaluru", "Delhi", "Chennai"];
for(let city of cities){
    console.log(city.toUpperCase());
}
//program to find the average of the class
m=marks.length;
summ = 0;
for(let mark of marks){
summ = summ+mark;
}
let avg = summ/m;
console.log(avg)

//printing of the price after 10% discount of the prize

let prize=[250, 645, 300, 900, 501];
let disc;
for(item of prize){
    disc = item - (item/10);
    console.log("the orginal prize is "+item+" and its discount prize is "+disc);
}
//array methods- push()--add to end of the array, pop()--delete from end and return, toString()-- convert into string
let veggies=["brinjal","tomatoe","radish"];
console.log(veggies)//printing the vegetables in veggie array
let adveg= veggies.push("beans");//adding a vegetable to veggies list of array
console.log(veggies)//pushed the element to end og=f the aray
console.log("added vegetable at",veggies);
let dltveg=veggies.pop();
console.log(veggies)//pop---deleted the last element in the array
console.log("deleted veggie is",dltveg);
// to string()
prize.toString();
console.log(prize);
console.log(typeof(prize));
//concat() used tojoin multiple arrays and return the reeult
let  marvel_heros=['Ironman', 'CaptainAmerica', 'Thor', 'Hulk'];
let dc_hero=['Batman', 'Flash', 'Superman'];
let superheroes= marvel_heros.concat(dc_hero,heroes);
console.log(superheroes);
//shift()==> delete the element which is at first part of the array(first index value)
marvel_heros.unshift("antman");
console.log(marvel_heros);// add's antman to the first index value
let ushift = marvel_heros.shift();// deleted the first index value in the array and return the array
console.log("deleted element is: ", ushift);
//slice(startindx,endindx);
console.log(heroes.slice(2,4));
//splice(addindex,removeindex,replace);
//lets say we created an ARRAY=[1, 2, 3, 4, 5, 6]
//the index value will start from 0 to 5
//splice(2,2)==> means here two elements paced after the index value 2 will be removed
//splice(2,2,10,11)==>here at first tow elements after the index value two will be removed and replaced with 10,11 
//lets see the example
let arrx=[1, 2, 3, 4, 5, 6];
arrx.splice(2,2);//=====>using slice method
console.log(arrx);
arrx.splice(2,2,103, 104,5 ,6,7);//==>using splice method to remove the eleemnts and replace them with some other elements and here we can also add the other elements we wanted
console.log(arrx);
arrx.splice(2,0,7,8,9);
console.log(arrx);//===> here 0 elements are removed but added two eleemnts to the array
