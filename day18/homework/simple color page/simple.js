let backgroundColor = document.getElementById("bgcolor")
let mianContent = document.getElementById("main")

function changeColor(){
    let myArr = ["White" , "Blue" , "Green" , "Yellow" , "Black" , "Brown" , "Orange" , "Grey" , "Gray" , "Aqua" , "Aquamarine" , "Pink" , "Purple" , "Tomato" , "Dodgerblue" , "Greenyellow" , "Yellowgreen" , "Cyan" ]
    let index = ""
    for(let i = 0 ; i<1 ; i++){
        let randomNum = Math.floor(Math.random() * myArr.length)
        index+=myArr[randomNum]
    }

   
    backgroundColor.innerHTML = index
    backgroundColor.style.color = index
    mianContent.style.backgroundColor = index

    if(index === "Black"){
        document.getElementById("buttonn").style.color="#fff"
    }
}