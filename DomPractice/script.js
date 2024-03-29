let divs = document.querySelectorAll(".box")

let index = 1
for(div of divs){
    div.innerText = `How are you ${index}`
    index++;
}