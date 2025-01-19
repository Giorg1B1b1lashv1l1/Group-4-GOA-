const button = document.getElementsByClassName("item")
const result = document.getElementById("sum")
const equal = document.getElementById("equal")
const clear = document.getElementById("clear")

let numArr  = []

let numStr = ""

for(let i = 0 ; i< button.length ; i++){
    button[i].addEventListener('click', function(){
        result.innerHTML += button[i].innerHTML
        if(button[i].innerHTML == "+" ||button[i].innerHTML == "-" ||button[i].innerHTML == "*" ||button[i].innerHTML == "/" || button[i].innerHTML == "="){
            numArr.push(numStr)
            numArr.push(button[i].innerHTML)

            numStr = ""
        }else{
            numStr += button[i].innerHTML
        }

        

        console.log(numStr)
        console.log(numArr)
    })
}

equal.addEventListener("click" , function(){
    numArr.push(numStr)
    if(numArr.includes("+")){
        let sum = Number(numArr[0]) + Number(numArr[2])
        result.innerHTML = sum
    }else if(numArr.includes("-")){
        let sum = Number(numArr[0]) - Number(numArr[2])
        result.innerHTML = sum
    }else if(numArr.includes("*")){
        let sum = Number(numArr[0]) * Number(numArr[2])
        result.innerHTML = sum
    }else if(numArr.includes("/")){
        let sum = Number(numArr[0]) / Number(numArr[2])
        result.innerHTML = sum
    }
    console.log(numArr)
})

clear.addEventListener("click" , function(){
    location.reload();
})