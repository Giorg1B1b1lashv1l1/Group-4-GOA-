// const getWeatherApi  = ()=>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("sunnysss")
//         })
//     })
// }

// const getWeatherIcon = (wether)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let icon
//             switch(wether){
//                 case "sunny":
//                     icon = "☀️"
//                     resolve(icon)
//                     break
//                 case "rainy":
//                     icon = "🌧️"
//                     resolve(icon)
//                     break
//                 default:
//                     icon = "not found"
//                     reject(icon)
//                     break
//         }
        
        
//         })
//     })
    
// }



// getWeatherApi().then(getWeatherIcon).then((data)=>{
//     console.log(data)
// }).catch((message)=>{
//     console.log(`reject ${message}`);
    
// })
// // //🌧️ ☀️





















































// const getWeatherApi  = ()=>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("sunny")
//         })
//     })
// }

// const getWeatherIcon = (wether)=>{
//     return new Promise((resolve,reject)=>{
//         let icon
//         switch(wether){
//             case "sunny":
//                 icon = "☀️"
//                 break
//             case "rainy":
//                 icon = "🌧️"
//                 break
//             default:
//                 icon = "not found"
//                 break
//         }

//         setTimeout(()=>{
//             if(icon == "not found"){
//                 reject(icon)

//             }else{
//                 resolve(icon)
//             }
//         })
//     })
    
// }

// getWeatherApi().then(getWeatherIcon)

// //🌧️ ☀️