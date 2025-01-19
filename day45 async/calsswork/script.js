//event loop

// let weatherData

// const getWeatherApi = (cb)=>{
//     setTimeout(() => {
//         weatherData = "☀️"
//         cb(weatherData)
//     },0);
// }

// const displaywarther = (data)=>{
//     console.log(data)
//     if(data == "☀️"){
//         console.log("today is gonna be sunny day")
//     }else{
//         console.log("today is gonna be cloudy day")
//     }
// }
// getWeatherApi(displaywarther)



//promise has 3 condition 
// 1)broken promise 
// 2)fulfilled promise 
// 3}pending Promise

// const getWeatherApi  = ()=>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("☀️")
//         })
//     })
// }

// const onsuccses = (data)=>{
//     console.log(`resolve ${data}`)
// }

// const onFail = (data)=>{
//     console.log(`reject ${data}`)
// }

// getWeatherApi().then(onsuccses).catch(onFail)


// const getWeatherApi = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("☀️")
//         } , 0)
//     })
// }

// const onSuccess = (data)=>{
//     console.log(`Resolve ${data}`)
// }

// const onFail = (data)=>{
//     console.log(`reject ${data}`)
// }

// const atTheEnd = ()=>{
//     console.log("The End")
// }

// getWeatherApi()
//     .then(onSuccess)
//     .catch(onFail)
//     .finally(atTheEnd)

//


// PROMISE = An object that manages Asynchronous operations.
//           wrap a Promise object around {Asynchronous code}
//           "I promis to return value"
//            Pending -> Resolved or rejected
//            for example : new Promise ((resolve,reject)=>{
//                                         "asynchronous code goes here"      
//                                          })

//Lets do this chores with callback and then with promises

// 1) Walk the Dog
// 2) Clean the kitchen
// 3) take out the trash


//with callbacks
// function walkdDog(cb){
//     setTimeout(()=>{
//         console.log("you walk the dog")
//         cb()
//     } , 3000)
// }

// function cleanKitchen(cb){
//     setTimeout(()=>{
//         console.log("you clean the kitchen")
//         cb()
//     } , 2500)
// }

// function takeOutTrash(cb){
//     setTimeout(()=>{
//         console.log("you take out the trash")
//         cb()
//     } , 1000)
// }

// walkdDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{            /////////CallBack Hells
//             console.log("you finish")
//         })
//     })
// })







//with Promises

// function walkdDog(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             let dogWalked = true
//             if(dogWalked){
//                 resolve("you walk the dog")
//             }else{
//                 reject("You didn't walk the dog")
//             }


            
//         } , 3000)
//     })
    
// }

// function cleanKitchen(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let cleanKitchen = true
//             if(cleanKitchen){
//                 resolve("you clean the kitchen")
//             }else{
//                 reject("you didn't clean the kitchen")
//             }
//         } , 2500)
//     })
    
// }

// function takeOutTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let trashTaken = false
//             if(trashTaken){
//                 resolve("you take out the trash")
//             }else{
//                 reject("you didn't take out the trash")
//             }
//         } , 1000)
        
//     })
// }

// walkdDog()
//     .then((resolved)=>{
//         console.log(resolved)
//         return cleanKitchen()
// })
//     .then((resolved)=>{
//         console.log(resolved)
//         return takeOutTrash()
// }).then((resolved)=>{
//     console.log(resolved)
// }).catch((errorr) =>{
//     console.error(errorr)
// })

//

// let p = new Promise((resolve,reject)=>{
//     let num1 = 1 
//     let num2 = 1
//     let sum = num1+num2
//     console.log(`${num1} + ${num2} = 2 ?`)
//     if(sum == 2){
//         resolve("Success")
//     }else{
//         reject("Failed")
//     }
// })

// p.then((message)=>{
//     console.log("True")
// }).catch((message)=>{
//     console.log("false")
// })


// with callbacks
// let userLeft = false
// let userDoNotWatching = true

// function watching(callback , errorr){
//     if(userLeft){
//         errorr({
//             name:"user Left ",
//             message:":("
//         })
//     }else if(userDoNotWatching){
//         errorr({
//             name:"user don't watching ",
//             message:":("
//         })
//     }else{
//         callback("subsctibe")
//     }
// }

// watching((message) =>{
//     console.log(message)
// } , (errors)=>{
//     console.log(errors.name + errors.message)
// })

// with Promises

// let userLeft = false
// let userDoNotWatching = true

// function watching(){
//     return new Promise((resolve , reject)=>{
//         if(userLeft){
//             reject({
//                 name:"user Left ",
//                 message:":("
//             })
//         }else if(userDoNotWatching){
//             reject({
//                 name:"user don't watching ",
//                 message:":("
//             })
//         }else{
//             resolve("Subscribe")
//         }
//     })
    
// }

// watching().then((resolved) =>{
//     console.log(resolved)
// }).catch((rejected) =>{
//     console.log(rejected.name + rejected.message)
// })

//

// const imageDownload1 = new Promise((resolve , reject)=>{
//     resolve("Image 1 is downloaded")
// })

// const imageDownload2 = new Promise((resolve , reject)=>{
//     resolve("Image 2 is downloaded")
// })

// const imageDownload3 = new Promise((resolve , reject)=>{
//     resolve("Image 3 is downloaded")
// })

// Promise.all([
//     imageDownload1,
//     imageDownload2,
//     imageDownload3
// ]).then((message)=>{
//     console.log(message)
// })



const imageDownload1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Image 1 is downloaded")
    } , 5000)
})

const imageDownload2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Image 2 is downloaded")
    } , 1000)
})

const imageDownload3 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Image 3 is downloaded")
    },7000)
})

Promise.race([
    imageDownload1,
    imageDownload2,
    imageDownload3
]).then((message)=>{
    console.log(message)
})