//map - array method
// const firstArr = [1,2,3,4]

// const newArr = firstArr.map(x => x*2)

// console.log(newArr)

//filter - array method

// const myArr = [20,3,34,56,45,23,70,4,5,60,43]

// const newArr = myArr.filter(x => x > 59)

// console.log(newArr)

//find - array method

// const myArr = ["BMW" ,"mercedess" , "Toyota"]
// const newArr = myArr.find(x => x=="BMW")

// console.log(newArr)
//find index - array method
// const myIndex = myArr.findIndex(x => x=="Toyota")
// console.log(myIndex)

//arr methods:
// map,filter , find , findindex , indexOf , slice , splice
//concat

// const firstArr = [1,2,3,4]
// const secondArr = [5,6,7,8]
// const thirdArr = [9]
// const fourthArr = [10]


// const concatedArr = firstArr.concat(secondArr , thirdArr ,fourthArr)
// console.log(concatedArr)


// indexOf
// const myArr = ["food" , "juice" , "sweet"]

// const newArr = myArr.indexOf("sweet")

// console.log(newArr)

//slice

// const myArr = [ "juice" , "sweet" , "fruit" , "vegetable" , "milk product"  , "meet product" ]

// console.log(myArr.slice(3 , 5))


//splice 

// const myArr = [ "juice" , "sweet" , "fruit" , "vegetable" , "milk product"  , "meet product" ]
// console.log(myArr.splice(2 , 3)) //სიიდან იშლება 3 ელემენტი თანმიმდევრობით მე-2 ინდექზე მყოფი ელემენტის ჩთვლით

// console.log(myArr)

// const arr1 = [1,2,3,4]
// const arr2 = [...arr1] 

// arr1.push(5)

// console.log(arr1)
// console.log(arr2)


//classwork

// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17]
// console.log("our Array")
// console.log(nums)
// console.log("Filter odd numbers")

// const filteredOdd = nums.filter((number)=>{
//     if(number % 2 ==1){
//         return number * 2
//     }
// })

// const mapedArr = filteredOdd.map((num)=>{
//     return num * 2 
// })
// console.log(filteredOdd)
// console.log("Doubled odd numbers")
// console.log(mapedArr)

