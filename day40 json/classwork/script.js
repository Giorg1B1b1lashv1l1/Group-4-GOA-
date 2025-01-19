// // json 

// // jvascript object
// console.log("-------------- JS object----------------------------")
// const myObj = {
//     name:"Giorgi",
//     surname: "Bibilashvili",
//     age: 21 ,
// }

// const jsonObj = {
//     "name": "giorgi",
//     "surname": "Bibilashvili",
//     "age": 21,
// }
//  console.log(myObj)
//  console.log("----------------JSON Object----------------")
//  console.log(jsonObj)

//  //განსხვავება ვიზუალურად არ არის ორივე არის ერთნაირი ობიექტი მაგრამ გვაქვს ასეთი მეთოდი stringify , რომელიც JSON-ის ობიექტს გადააქცევს სტრინგად, ეს გვჭირდება იმისთვის რომ ობიექტის ზომა შევამციროთ რომ გადასაგზავნათ უფრო მარტივი და სწრაფი იყოს

// const strJson = JSON.stringify(jsonObj)
// console.log("----------------stringify json object---------------------")
// console.log(strJson)

// // ხოლო მიმღები ვალდებულია გამოიყენოს parse  მეთოდი რომელიც JSon-ის ობიექტს უბრუნებს პირვანდელ სახეს და გარდაქმნის სტრინგიდან ობიექტად

// const parsedJSON = JSON.parse(strJson)
// console.log("----------------parsed json object-----------------")
// console.log(parsedJSON)


