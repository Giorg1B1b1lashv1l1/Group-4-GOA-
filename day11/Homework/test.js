// let myArr=[1,2,3,4,5,-1,]
// let sum=0
// for(let i in myArr){
//     if(i > 0){
//         sum+=Number(i)
//     }
    
// }

// console.log(sum)
// myArray=[1,-2,3,4,5]

// function positiveSum(myArr){
//     let sum=0
//     for(let i of myArr){
//         if(i > 0){
//             sum+=Number(i)
//         }
//     }
//     return sum
// }

// console.log(positiveSum(myArray))

// function calculator(operation,value1,value2){
//     if (operation === "+"){
//         return value1 + value2
//     }else if(operation === "-"){
//         return value1 - value2
//     }else if(operation === "*"){
//         return value1 * value2
//     }else if(operation === "/"){
//         return value1 * value2
//     }
// }



// function countBy(x, n) {
//     let z = [];
//     for(let i=1 ; i<=n ; i++){
//         z.push(x*i)
//     }
//       return z
  
    
// }

// console.log(countBy(1,10))


// function betterThanAverage(classPoints, yourPoints) {
//     classPoints.push(yourPoints)
//     classPoints.sort()
//     if(yourPoints == classPoints.slice(-1)){
//         console.log(true)
//     }else{
//         return false
//     }
// }

// betterThanAverage([2,3] , 5)




// function betterThanAverage(classPoints, yourPoints) {
//     let sumOfAverage=0
//     for(let i of classPoints){
//       sumOfAverage+=i
//     }
//     let avarageArithmetic=sumOfAverage / classPoints.length ;
//     if (avarageArithmetic < yourPoints){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
    
//     // console.log(sumOfAverage)
// }



// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88] , 75)



var humanYearsCatYearsDogYears = function(humanYears) {
    let myArr=[]
    let firtstCatYear=15;
    let secondCatYear=9;
    let thirdCatYear=4;
    let firtstDogYear=15;
    let secondDogYear=9;
    let thirdDogYear=5;
    if(humanYears == 1){
        myArr.push(humanYears,firtstCatYear,firtstDogYear)
        return myArr
    }else if(humanYears == 2){
        myArr.push(humanYears,firtstCatYear+secondCatYear,firtstDogYear+secondDogYear)
        return myArr
    }else if(humanYears == 3){
        myArr.push(humanYears,firtstCatYear+secondCatYear+thirdCatYear,firtstDogYear+secondDogYear+thirdDogYear)
        return myArr
    }else if(humanYears>3){
        let catYear=firtstCatYear+secondCatYear
        let dogYear=firtstDogYear+secondDogYear
        // myArr.push(humanYears,catYear,dogYear)
        for(let i=0; i<humanYears-2 ;i++){
            catYear+=thirdCatYear
            dogYear+=thirdDogYear
        }
        myArr.push(humanYears,catYear,dogYear)
        
        
        
        return myArr
    }
}
  

console.log(humanYearsCatYearsDogYears(10))
