const numbers = document.getElementsByClassName("number")
const operators = document.getElementsByClassName("operator")

const equalSign = document.getElementById("equal")
const result = document.getElementById("sum")

const clear = document.getElementById("clear")

let myArr = []
let myStr = ""

for(let i = 0 ; i < numbers.length ; i++){
    numbers[i].addEventListener("click" , function(){
        result.innerHTML += numbers[i].innerHTML
        myStr += numbers[i].innerHTML
    })
}

for(let i = 0 ; i < operators.length ; i++){
    operators[i].addEventListener("click" , function(){
        myArr.push(myStr)
        myStr = ""
        myArr.push(operators[i].innerHTML)
        result.innerHTML += operators[i].innerHTML
        console.log(myArr)
        console.log(myStr)
    })
}

equalSign.addEventListener("click" , function(){
    let finalResult = 0

    for(let i = 0 ; i < myArr.length ; i++){
        if(myArr[i] === "*"){
            finalResult = parseFloat(myArr[i-1]) * parseFloat(myArr[i+1]) 
            myArr[i-1] = finalResult
            myArr.splice(i,2)
            i--
        }else if(myArr[i] === "/"){
            finalResult = parseFloat(myArr[i-1]) * parseFloat(myArr[i+1]) 
            myArr[i-1] = finalResult
            myArr.splice(i,2)
            i--
        }
    }

    finalResult = parseFloat(myArr[0])
    for(let i = 1 ;i< myArr.length ; i++){
        if(myArr[i]==="+"){
            finalResult+= parseFloat(myArr[i+1])
        }else if(myArr[i] === "-"){
            finalResult-=parseFloat(myArr[i+1])
        }
    }

    console.log(myArr)
    console.log(myStr)

    result.innerHTML = finalResult
})

clear.addEventListener("click" , function(){
    location.reload()
})
