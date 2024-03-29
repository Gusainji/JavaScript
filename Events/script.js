// let btn1 = document.querySelector("#btn1")

// btn1.onclick = () => {
//     console.log("you clicked")
//     let a = 23;
//     a++;
//     console.log(a)
// }



// let div = document.querySelector("div")
// div.onmouseover = () => {
//     console.log("Your mouse is working....")
// }

//..........................................................


// let btn1 = document.querySelector("#btn1")

// btn1.addEventListener("dblclick", () =>{
//     console.log("working....")
// })

//....................................................

let btn1 = document.querySelector("#btn1")
let body = document.querySelector("body")
let currMode = "light"
btn1.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
        currMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
})
