let first = document.getElementById("first")
//getAttribute

let a = first.getAttribute("class")
console.log(a)

//hasAttribute

console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

//hidden, setAttribute

// first.setAttribute("hidden", "true")
first.setAttribute("class", "true sachin")

//removeAttribute

first.removeAttribute("class")