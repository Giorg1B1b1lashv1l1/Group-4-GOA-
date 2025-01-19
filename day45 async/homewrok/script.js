// const fakeApiRequest = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("getting API")
//         } , 2000)
//     })
// }

// fakeApiRequest().then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.error(`recejcted ${data}`)
// })


const fakeApiRequest = ()=>{
    return new Promise((resolve , reject)=>{
        let randomNum = Math.floor(Math.random() * 15)
        setTimeout(()=>{
            if(randomNum %2 ==0){
                resolve("Succsses")
            }else(
                reject("geting API failed")
            )
        },2000)
    })

}

const succsses = (data)=>{
    console.log(data)
}

const onfail = (data)=>{
    console.error(data)
}


fakeApiRequest().then(succsses).catch(onfail)