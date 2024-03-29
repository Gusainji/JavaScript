// let newBtn = document.createElement("button")
// newBtn.innerText = "click me";
// console.log(newBtn)

// let div = document.querySelector("div")
// div.append(newBtn)

// let heading  = document.createElement("h1")
// heading.innerHTML = "<h1>New Heading</h1>"

// document.querySelector("body").prepend(heading)



//.........................................................................
// Q1- Create a button with text click me and background color and insert button as first element inside the body tag   

let newbtn = document.createElement("button");
newbtn.innertext = "click me";

newbtn.style.background = "black"
newbtn.style.color = "green"

newbtn.style.height = "50px"
newbtn.style.width = "50px"


document.querySelector("body").prepend(newbtn)
