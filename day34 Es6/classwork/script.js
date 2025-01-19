// ES6 Array method

//map

// const myArr = ["Mercedess" ,"BMW" , "Porsche" , "Audi" , "Opel"]



// console.log("Top 5 German Vechile Company: ")
// myArr.map((item,index) =>{
//     console.log(`${index + 1}) ${item}`)
// })


// create food aray  , then we should select all of them, use map method for console foods name with their index

// console.log("Top 5 Georgian Food:")

// const foodArray = ["Khinkali" , "Mwvadi" , "Khachapuri" , "Ojaxuri" , "Mwadi and Yveli"]

// foodArray.map((food, index)=>{
//     console.log(`${index+1}) ${food}`)
// })


//Map Function
// const mapFunc = (myArr) =>{
//     for(let i =0 ; i<myArr.length ; i++){
//         console.log(`${i+1}) ${myArr[i]}`)
//     }
// }

// const arr = [ "toyota" , "honda" , "hyundai" , "mitsuish"]
// console.log("Japan cars:")
// mapFunc(arr)


//filter function

// let myArr = [1,2,3,4,5,6,7,8,9,10]

// let newArr = myArr.filter((item , index)=>{
//     return item % 2 === 0
// })

// console.log(newArr)


// let numArr = [20 , 24 , 12 , 15 , 45 , 50 , 56 , 34 , 55 , 95 , 90]

// let filteredArr = numArr.filter((item , index)=>{
//     return item % 5 ===0
// })

// console.log(filteredArr)


// filter Function
// const emptyArr = []
// const filterFunc = (arr) =>{
//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i] %5===0){
//             emptyArr.push(arr[i])
//         }
//     }
// }

// myArr = [1,5,10,20,30,43,34,23,42]
// filterFunc(myArr)
// console.log(emptyArr)



// find function

// let myArr = ["BMW" , "Porsche" , "Audi" , "Opel"]

// let element = myArr.find((item, index)=>{
//     return item.length > 3
// })

// console.log(element)





// const foodArr = ["mwvadi" , "khachapuri" , "Shqmeruli" , "ojaxuri"  ,"Khinkali"]

// const findKhinkali = foodArr.find((item, index)=>{
//     return item === "Khinkali"
// })

// console.log(findKhinkali)

// // findindex

// let myfood = foodArr.findIndex((item)=>{
//     return item === "Khinkali"
// })

// console.log(myfood)


// let newArr = ["gio" , "mwvadi" , "khachapuri" , "Sphmeruli" , "ojaxuri" ,"Khink"]

// let element = newArr.find((item, index)=>{
//     console.log(item , index)
// })


//filter

// let foods = ["khachapuri" , "Khinkali" , "Sphmeruli"]


// find function simulatiom
// const findItem = (Array , item) =>{
//     for(let i of Array){
//         if(i === item){
//             return i
//         }
//     }
// }

// console.log(findItem(foods,"khachapuri" ))


// findindex function simulation

// const findIndexFunc = (array , item) =>{
//     for(i of array){
//         if(i === item){
//             return `We Found ${i} , it's index is ${array.indexOf(i)}`
//         }
//     }
// }

// console.log(findIndexFunc(foods , "Khinkali"))


//calculate destructing

// const calculator = (a,b) =>{
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;

//     return [add, subtract, multiply, divide]
// }

// const [add, subtract, multiply, divide] = calculator(4,5)

// console.log(add , subtract , multiply , divide)


