let RunAgain = true;
const CanDrive = (age) =>{
    return age >= 18 ? true:false
}
while(RunAgain){
    let color = prompt("Enter the color")
    document.body.style.background= color
let age = prompt("Enter your age")
age = Number.parseInt(age)
if(age<0){
    console.error("Enter a valid age")
    break
}
if(CanDrive(age)){
    alert("you can drive")
}else{
    alert("You cant")
}
RunAgain = confirm("Do you wana play again?")
}