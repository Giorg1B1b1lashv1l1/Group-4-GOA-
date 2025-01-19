// ES6 - 2015

//scope , let , var , const

//for loop

// const myList = [1,2,3,4,5]

// for(let i = 0 ; i<myList.length ; i++){
//     console.log(myList[i]) 
// }

// for loop ES6

// let myName = "giorgi"

// for(let i of myName){
//     console.log(i)
// }

//classwork

const input = document.getElementById("input1")
const input2 = document.getElementById("input2")
const addBtn = document.getElementById("add")
const checkBtn = document.getElementById("Check")
const namee = document.getElementById("name")

var nameArr = []
addBtn.addEventListener("click" , function(){
    nameArr.push(input.value)
    input.value = ""
    console.log(nameArr)
})

checkBtn.addEventListener("click" , function(){
    for(i of nameArr){
        if(nameArr == input2.value){
            namee.innerHTML = input2.value
        }
    }
})