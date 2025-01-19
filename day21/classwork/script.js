const buttons = document.getElementsByTagName("button")
const p = document.getElementById("p")

let num = ""

for(let i =0 ; i < buttons.length ; i++){
    buttons[i].addEventListener("click" , function(){
        num +=buttons[i].innerHTML
        p.innerHTML = num
        console.log(num)
    } )
}

function plus(num1 , num2){
    return num1 + num2
}

function minus(num1 , num2){
   return num1 - num2
}

function divide(num1 , num2){
    return num1 / num2
}

function multyply(num1 , num2){
    return num1 * num2
}