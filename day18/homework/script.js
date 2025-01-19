let backgroundColor = document.getElementById("bgcolor")
let mianContent = document.getElementById("main")

function changeColor(){
    let myArr = ["A" , "B" , "C" , "D" , "E" , "F" , "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"]
    let index = "#"
    for(let i = 0 ; i<6 ; i++){
        let randomNum = Math.floor(Math.random() * myArr.length)
        index+=myArr[randomNum]
    }
    backgroundColor.innerHTML = index
    backgroundColor.style.color = index
    mianContent.style.backgroundColor = index
}