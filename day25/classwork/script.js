// document.getElementById("btn").addEventListener("click" , function(){
//     let sound = new Audio("/day25/classwork/audio/crash.mp3")
//      let soundOn = sound.play()
//     soundOn
// })

// let myArr =["/day25/classwork/audio/crash.mp3" , "/day25/classwork/audio/crash.mp3","/day25/classwork/audio/crash.mp3"] 
// document.getElementById("btn").addEventListener("keypress" , function(event){
//     if(event.key == "W" || event.key == "w"){
//         let sound = new Audio(myArr[1])
//         sound.play()
//     }
// })


// let result = ""
// let concat = " "
// document.addEventListener("keypress" , function(event){
    
//     if(event.key == "Enter"){
//         result = result.slice(0,-1)
//         document.getElementById("h1").innerHTML = result
//     }else if(event.code = "Space"){
//         result+=concat
//         console.log("hi") 
//     }else{
//         result+=event.key
//         document.getElementById("h1").innerHTML = result
//     }
//     console.log(event)
// })




let div = document.getElementById("div")

let vertical = 0

let horizontal = 0

document.addEventListener("keypress" , function(event){
    switch(event.key){
        case "w":
            vertical+=30
            div.style.bottom = vertical + "px"
            div.style.transform = "rotate(-90deg)"
            break
        case "s":
            vertical-=30
            div.style.bottom = vertical + "px"
            div.style.transform = "rotate(90deg)"
            break
        case "a":
            horizontal-=30
            div.style.left = horizontal + "px"
            div.style.transform = "rotateY(180deg)"
            break
        case "d":
            horizontal+=30
            div.style.left = horizontal + "px"
            div.style.transform = "rotateY(360deg)"
            break


    }
})


























