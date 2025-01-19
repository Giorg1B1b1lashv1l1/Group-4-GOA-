//Fetch(წამოღება)

// const getApi = () => {
//     return new Promise((resolve,reject)=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((message)=>{
//                 message.json().then((data)=>{
//                 resolve(data)
//             })
//         }).catch(()=>{
//             reject(data)
//         })
//     })

// }

// const func = (data)=>{
//     data.map((item)=>{
//         console.log(item)
//     })
// }

// getApi().then(func)







//==========================================================================================================
//xmlhttprequest

// const xhr = new XMLHttpRequest
// xhr.open("GET" , "https://jsonplaceholder.typicode.com/todos")
// console.log(xhr)

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState == 4){
//         if(xhr.status == 200){
//             console.log(xhr.responseText)
//         }
//     }
// }




// xhr.send()


// const data = fetch("https://jsonplaceholder.typicode.com/todos")

// data.then((datas)=>{
//     datas.json().then((item)=>{
//         console.log(item)
//     })
// })
const btn = document.getElementById("btn")
const myUl = document.getElementById("ull")

const getWearherApi = ()=>{
    return  new Promise((resolve , reject)=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
            data.json().then((response)=>{
                resolve(response)
            }).catch(()=>{
                reject("Error")
            })
        })

    })
}
getWearherApi()
    .then((data)=>{
        console.log(data)
        displaytitle(data)
    })
    
    const displaytitle = (apiobj)=>{
        btn.addEventListener("click" , ()=>{
            apiobj.map((item)=>{
                let li = document.createElement("li")
                li.innerHTML = item.title
                myUl.appendChild(li)
                li.style.color = "red"
                // document.body.innerHTML += `${item.title}+ <br> <br>`
            })
        })
    }
    