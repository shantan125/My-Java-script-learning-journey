//event object 
let btn1 = document.querySelector("#btn1");
btn1.onclick =  (evt) =>{
    btn1.innerHTML = "hey there";
    alert= "you clicked the button bro";
console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.click);
console.log(evt.clientX,  evt.clientY); //mainly used in game building
}


//inline handling
//done through HTML
//check html code

//use node.event=()=>{ ---code---}
let div = document.querySelector("#div");
//when the mouse is on the div element then we can see the content in the box is changed
//when we leave the div element we can see the that text saying you left the div element
div.onmouseenter = ()=>{
    div.innerHTML = "You are in div element";
    div.style.color = "green";
    div.style.backgroundColor="black";
}
div.onmouseleave = ()=>{
    div.innerHTML = "YOU JUST LEFT THE DIV ELEMENT";
    div.style.color = "black";
    div.style.backgroundColor="green";
}
//when ever the button is clicked it will show how many times the button is clicked in the div element and every time th button is clicked it will change to a random color
let divv = document.querySelector("#divv");
let cnt = 0;
divv.onclick = ()=>{
    cnt++;
    divv.innerHTML = cnt;
    divv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

//eventlistener
//for single event we csan create multiple listener's

//node.addEventListerner(event, callback)
//node. removeListener(event, callback)

//callback--- it is a function work's as a argument in another function

let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click",()=>{
    console.log("your button was clicked");
})
//event ===>'click'
//callback ===>  ()=> console.log("your button was clicked");

//to remove the event listener 
btn4.removeEventListener("click",()=>{
    console.log("your button was clicked");
})


//Light mode aand dark mode 
document.addEventListener("DOMContentLoaded", function() {
    let modeButton = document.querySelector("#mode");
    let body = document.body;
    let currMode = "light";

    modeButton.addEventListener("click", function() {
        if (currMode === "light") {
            body.classList.remove("light");
            body.classList.add("dark");
            currMode = "dark";
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
            currMode = "light";
        }
        console.log(currMode);
    });
});

