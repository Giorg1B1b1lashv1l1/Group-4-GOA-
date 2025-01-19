// async function getApi() {
//     const response = await (await fetch("https://jsonplaceholder.typicode.com/todos" )).json()
//     console.log(response)
// }

// getApi()



// const getApi = ()=>{
//     return fetch("https://jsonplaceholder.typicode.com/todos")
    
// }

// async function getdata(){
//     try{
//         const response = await(await getApi()).json()
//         console.log(response);
        
//     }
//     catch{
//         console.log("error")
//     }

// }

// getdata()





// const getData = ()=>{
//     return  new Promise(async(resolve , reject)=>{
//         const data = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json()
//         resolve(data)
//     })
// }





// const getResponse = async()=>{
//     try{
//         const data = await getData()
//         console.log(data);
//     }catch{
//         console.log("error")
//     }finally{
//         console.log("all done")
//     }
    
// }
// getResponse()






// asynch await = async= makes a function return promise
//                await= make an async function wait for a promise
//                they allows you write asynchronous code in a synchromous maner
//                async doesn't have resolve or reject parametres
//                everything after await is placed in an event queue

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
//             let trashTaken = true
//             if(trashTaken){
//                 resolve("you take out the trash")
//             }else{
//                 reject("you didn't take out the trash")
//             }
//         } , 1000)
        
//     })
// }

// async function doChores(){
//     try{
//         const walkDogResolved = await walkdDog();
//         console.log(walkDogResolved);
    
//         const cleanKitchenResolved = await cleanKitchen();
//         console.log(cleanKitchenResolved);

//         const takeOutTrashResolved = await takeOutTrash();
//         console.log(takeOutTrashResolved);

//         console.log("you finish all the chores")
//     }catch(error){
//         console.error(error)
//     }
// }


// doChores()


// fetchData()
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could not fetch resourses")
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    }
    catch(error){
        console.error(error)
    }
}




