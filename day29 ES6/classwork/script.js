// გავლილი მასალა 

// arrow function
// ternary operators
// loop
// scope
// object assign

// ახალი მასალა

// დესტრუქცია / destruction  - დაშლა

// let myCompanyMembers = ["Giorgi" , "Mariami" , "Luka" , "Daviti"  , "Giorgi Lomsa" , "Shalva" , ]

// let [Entrepreneur , CEO , Maneger , Accountant , President ] = myCompanyMembers


// console.log(`Interviewer: Who is CEO of your Company MR.Giorgi? \nMR.Giorgi: My company has most clever CEO in the world and her name is ${CEO}`)






// let obj = {
//     name:"Giorgi",
//     work:"GIORGI's company",
//     position:"Entrepreneur",
// } 

// let {work , position} = obj

// console.log(position)




// const persons = [
//     {
//         name: "Giorgi",
//         work: "CEO"
//     },
//     {
//         name: "luka",
//         work : "Maneger"
//     },
//     {
//         name: "guka",
//         work:"Assistant"
//     }

// ]

// const [person1 , person2 , person3] = persons

// console.log(person3)

// const{name:person1Name , work: person1Work} = person1
// const{name:person2Name , work: person2Work} = person2
// const{name:person3Name , work: person3Work} = person3


// console.log(person2Work)
// console.log(person2Name)




/////////////////////////////////////////

////////////////////////////////////////




//BroCode
//array destruction
// const colors = ["red" , "green" , "black" , "white" , "blue" , 'pink']

// const [firtsColor , secondColor , thirdColor , ...others] = colors

// console.log(secondColor)

// console.log(others)

//Object Destruction

let sort = ({name , lastname , age , work , socialScore = "doesnt have"}) =>{
    console.log(`name:${name}`)
    console.log(`lastname:${lastname}`)
    console.log(`age:${age}`)
    console.log(`work:${work}`)
    console.log(`socialscore:${socialScore}`)
}

const person1 = {
    name:"giorgi",
    lastname: "bibila",
    age: 21,
    work: "CEO"

}

const person2 = {
    name:"Mariami",
    lastname: "Gogiashvili",
    age: 21,
    work: "Manager",
    socialScore: 10000000
}

sort(person2)
sort(person1)

