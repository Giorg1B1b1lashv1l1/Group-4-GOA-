// rest და spread ოპერატორები Javascript - ის სინტაქსში ხშირად გამოიყენება და ორივე ... სიმბოლოს იყენებს 

//მაგრამ მათი გამოყენების მეთოდები განსხვავდება

//Rest operator-ი გამოიყენება ფუნქცისს პარამეტრების დასამატებლად, რაც საშუალებას გვაზლევს ფუნქციის ყველა დარჩენილი არგუმენტი ერთიან მასივში მოვათავსოთ


// const handleRest = (name1 , name2 , ...nameN) =>{
//     const myArr = [name1 , name2 , ...nameN]
//     console.log(myArr)
// }

// handleRest("giorgi" , "luka" , "giga" , "gio" , "avto")


// Spread Operator -

// const nums = [1,2,3]
// const newnums = [...nums , 4,5,6]
// console.log(newnums)
// console.log(...nums)



//classwork
// console.log("--------------------------classwork-----------------------------")
// console.log("N1 rest operator")
// const myCompanyPositions = (Ceo , manager , Director , ...otherMembers) =>{
//     const myArr = [Ceo , manager , Director , ...otherMembers]
//     console.log(myArr) 
//     console.log(...otherMembers)
// }

// myCompanyPositions("Giorgi" , "Mariami" , "Luka" , "gio" , "daviti" , "shalva" , "gocha")



// console.log("--------------------------classwork-----------------------------")
// console.log("N2 Spread operator")

// const massive = [1,2,3,4,5,6,7]
// const continueNums = [...massive , 8,9,10]
// console.log(continueNums)

// const myObj = {
//     name:"Giorgi",
//     nickname:"Bibila",
//     age:21
// }

// const newobj = {
//     ...myObj,
//     job:"CEO"
// }

// console.log(newobj)\



//project

let array = []
let counter = 0
const handleAddItem = () =>{
    counter++
    let newArr = []
    newArr.push(counter)
    array = [...array , ...newArr]
    console.log(array)
}


const handleDeleteItem = () =>{
    array.pop(0)
    console.log(array)


}