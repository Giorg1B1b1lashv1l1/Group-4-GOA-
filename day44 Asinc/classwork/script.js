// //asynchronous code
// // async 
// //sync

// // sync 
// console.log("1") //#1
// console.log("2") //#2
// console.log("3") //#3
// console.log("4") //#4

// //this is synchronous code


// ///asynchronous code
// let xinkali
// const orderFood = ()=>{
//     console.log("order food")
//     setTimeout(()=>{
//         xinkali = "ხინკალი"
//         console.log(`mzadaa , მიირტვით ${xinkali}`)
//     } , 3000)
// }

// orderFood()


//classwork
// let food

// function orderFood(callback , callback1 , callback3){
//     console.log("Choose your food to order")
//     food = "mwvadi"
//     setTimeout(()=>{
//         console.log(food)
//     } , 1000)
//     setTimeout(()=>{
//         food = "mwvadi"
//         if(food == "mwvadi"){
//             console.log(`Your ${food} will be prepared soon , please wait 10sec`)
//         }
        
//     } , 3000)
//     setTimeout(()=>{
//         callback()
//         callback1()
//     } , 10000)

//     setTimeout(()=>{
//         callback3()
//     } , 12000)
// }


// console.log("call restaurant")
// orderFood(foodDone , syncFunc , getFood)

// function foodDone(){
//     console.log(`your ${food} is done`)
// }


// function syncFunc(){
//     console.log("we can suggest you our delivery service")
//     let delivery = true
//     if(delivery == true){
//         console.log("our curier bring your food soon")
//     }
// }

// function getFood(){
//     console.log("no thanks I will bring food myself , thanks for service")
// }

// orderFood()

// brocod explain

// Synchronoush   = Execute line by line consecutively(თანმიმდევრულად)  in a sequential maner code that waits for an operation to complete



//Asynchronous =  Allows multipe operations to be performed concurrently(პარალელურად) without waiting,Asynchronous code doesn't block the execution flow and allows the program to continue



// function func1(callback){
//     setTimeout(()=>{
//         console.log("task 1")
//         callback()
//     } , 3000)
// }


// function func2(){
//     console.log("task 2")
//     console.log("task 3")
//     console.log("task 4")
// }







// func1(func2)



///////////////////////////////////////////////////

let food

function orderFood(callback , callback1){
    food = "xinkali"
    console.log(`order ${food}`)
    setTimeout(()=>{
        callback(food)
        callback1(food)
    } , 5000)
}
orderFood(foodReady , gemrielad)

function foodReady(xinkali){
    console.log(`Your ${xinkali} Is Done`)
}

function gemrielad(food){
    setTimeout(()=>{
        console.log(`Gemrielad miirtvit Tqveni ${food} `)
    } , 7000)
}