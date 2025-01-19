//Number Generator

const myNumbers = [Math.floor(Math.random() * 5) , Math.floor(Math.random() * 10) , Math.floor(Math.random() * 20)]

const mySet = new Set(myNumbers)
console.log(myNumbers)
console.log(mySet)