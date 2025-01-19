//classwork 1
// let myArr = ["gio" , "gabrieli" , "ana" , "mearbi" , "achiko"]

// for(let element of myArr){
//     if(element[0] == "a"){
//         console.log(element)
//     }
// }

//foreach

// const arr = [1,2,3,4,5,6]

// for(let element of arr){
//     console.log(element)

// }

// arr.forEach((element) =>{
//     console.log(element)
// })
let array = [0,1]
const fib = (arr) =>{
    let myArr = []
    for(let element of arr){
        myArr.push(element+element)
    }
    return myArr
}

console.log(fib(array))