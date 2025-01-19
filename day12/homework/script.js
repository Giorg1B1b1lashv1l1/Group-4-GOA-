//CodeWars

//#1 Remove Time

// let shortDate="Friday May 2, 9am"
// let arrDate=shortDate.split(",")
// console.log(String(arrDate[0]))

//#2 Grasshopper - Array Mean

// var findAverage = function (nums) {
//     // Code here
//     let sum=0
//     for(let i of nums){
//         sum+=i
//     }
//     let average=sum / nums.length
//     return average
// }

// console.log(findAverage([1, 3, 5,7]))



//#3 FIXME: Replace all dots

// var replaceDots = function(str) {
//     for(let i=0 ; i <= str.length ; i++ ){
//       if(i=="."){
//         let replacedDot=str.replace(i , "-")
//         return replacedDot
//     }
// }
//   }

//   console.log(replaceDots("one.two.three"))

//A Needle in the Haystack

myArr=['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]

function findNeedle(haystack){
  for(i of haystack){
    if(i==="needle"){
      return  "found the needle at position " + myArr.indexOf(i)
    }
  }
}

console.log(findNeedle(myArr))