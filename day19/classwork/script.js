// Object Constructor

// let person1 = {
//     name: "Giorgi",
//     age: "21",
//     surname: "Bibilashvili",
//     work: "Developer",
// }

// let person2={
//     name:"Vefxvia",
//     age:"50",
//     surname:"Lomia",
//     work:"CEO Of Google"
// }

// let person3 = {
//     name:"Murtazi",
//     age:"45",
//     surname:"Kbilcecxlashvili",
//     work:"Pilot"
// }

// function person(name,surname,age,work){
//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.work = work
// }


// const person1 = new person("Giorgi" , "Bibilashvili" , "21" , "Developer") 


// console.log(person1.name)



//Classwork

const pName = document.getElementById("name")
const pSurname = document.getElementById("surname")
const pAge = document.getElementById("age")

function person(name,surname,age){
    this.name = name
    this.surname = surname
    this.age = age
}

function logIn(){
    const person1 = new person(pName.value,pSurname.value,pAge.value)
    console.log(person1)
}
























































