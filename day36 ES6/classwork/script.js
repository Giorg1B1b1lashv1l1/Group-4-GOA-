// MAP Set 
//set
//set method removes all dublicated values from the array
// const myArray = [1,2,3,4,5 ,4 ,5]
// const set = new Set(myArray)

// console.log(myArray)
// console.log(set)

// console.log([...set])

//add method 

// const myArray = [1,2,3,4,5]
// const mySet = new Set(myArray)
// mySet.add(6)
// mySet.add("hello")
// mySet.add({name:"giorgi"})
// mySet.delete("hello")
// mySet.clear() removes all element from a map
//in set method we can't access the element by their index becouse its unordered 
// console.log(mySet[3]) // undefined
// console.log(mySet)

//Map

// const myMap = new Map([[{} , "a"] , [{} , "b"] , [1 , "one"]]) //we can use object as a key in map
// myMap.set({} , "c") // set adds new key and value in map
// myMap.delete(1) // delete method removes keys from map
// console.log(myMap)
// console.log(`size: ${myMap.size}`)


//reduce 

 const prices = [5,30,10,25,20 , 15]

 const total = prices.reduce((item , iteration) =>{
     return item + iteration
 })

 console.log(`$${total.toFixed(2)}`)

 maxNum = prices.reduce((min,max)=>{
    return Math.max(min , max)
 })

 console.log(`max number is: ${maxNum}`)

 minNum = prices.reduce((min,max)=>{
    return Math.min(min , max)
 })

 console.log(`max number is: ${minNum}`)