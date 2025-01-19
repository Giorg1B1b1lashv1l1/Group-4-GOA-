// object = {
//     sayHeloo: function(){

//     }
// }

// consoll = {
//     log2: function(){
//         console.log("Hello")
//     }
// }

// consoll.log2()

//Object Constructor

// function person(name , surname ,age){
//     this.name = name
//     this.surname = surname
//     this.age = age

//     this.changeName = function(name){
//         this.name = name
//     }
// }

// const person1 = new person("Giorgi" , "Bibilashvili" , "21")

// console.log(person1.name);

// person1.changeName("gabrieli")

// console.log(person1.name);


//Time








//clock project
const oClock = document.getElementById("clock")

function clock(){
    const date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    if(second < 10){
        let currentTime = hours + ":" + minutes + ":" +"0"+ second
        oClock.innerHTML = currentTime
    }else if(minutes < 10){
        let currentTime = hours + ":" +"0" + minutes + ":" + second
        oClock.innerHTML = currentTime
    }else if(hours < 10){
        let currentTime ="0" + hours + ":"  + minutes + ":" + second
        oClock.innerHTML = currentTime
    }else{
        let currentTime = hours + ":"  + minutes + ":" + second
        oClock.innerHTML = currentTime
    }
    console.log(hours + ":" + minutes + ":" + second)
}


// setInterval(clock , 1000)
