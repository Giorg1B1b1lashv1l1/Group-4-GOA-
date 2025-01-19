// JS Clases
// class Person{
//     constructor(name ,age){
//         this.name = name
//         this.age = age
//     }
//     greeting(){
//         console.log(`Hello my name is ${this.name} and i am ${this.age} years old`)
//     }
// }



// inheritance

// class Student extends Person{
//     constructor(name , age , points){
//         super(name,age)
//         this.points = points
//     }
//     pointMethod(){
//         super.greeting
//         console.log(` Hello my name is ${this.name}, i'm ${this.age} years old, this is my Points ${this.points}`)
//     }
// }
// const newPerson = new Person("giorgi" , 21)
// const newStudent = new Student("Luka" , 18 , 1000)

// // newPerson.greeting()
// newStudent.pointMethod()


//classwork

// class Rectangle{
//     constructor(width , height){
//         this.width = width
//         this.height = height
//     }

//     get area(){
//         return this.width * this.height
//     }

//     set area([value1 , value2]){
//         this.width = value1
//         this.height = value2
//     }
// }

// const newRectangle = new Rectangle(7 , 4)
// newRectangle.area = [2 , 5]

// console.log(`Width: ${newRectangle.width}`)
// console.log(`Height: ${newRectangle.height}`)
// console.log(`area: ${newRectangle.area}`)

// practice
// class Product{
//     constructor(name , price){
//         this.name = name
//         this.price = price
//     }
//     displayProduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`price:$ ${this.price}`)
        
//     }
//     calculateTotal(salesTaxs){
//         return this.price + (this.price * salesTaxs)
//     }
// }

// const salesTaxs = 0.05

// const product1 = new Product("Shirt" , 9.99)
// product1.displayProduct()

// const total = product1.calculateTotal(salesTaxs)
// console.log(`total price (with tax): $ ${total.toFixed(2)}`)



//practice 2

// class User{
//     constructor(name , age){
//         this.name = name
//         this.age = age
//     }

//     printUser(){
//         console.log(this.name , this.age)
//     }
// }

// const user = new User("giorgi" , 21)
// user.printUser()
// console.log(user)

//inheritance - იერარქია
// const f1 = () =>{
//     return class User{
//         printUser(){
//             console.log("this is user")
//         }
//     }
// }

// class Second extends f1(){

// }

// const sec  = new Second()
// sec.printUser()


class Costumer{
    constructor(name , surname){
        this.name = name
        this.surname = surname
    }
    askingQuestions(){
        console.log("Could you help me please")
    }
    goodHabits(){
        return "Thank you very much, this shop has so good stuff and service "
    }
    badHabits(){
        console.log("i hate this shop because you have bad stuff and service , i never come here")
    }
}

const costumer1 = new Costumer("Giorgi" , "Bibilashvili")
const costumer2 = new Costumer("Luka" , "Bibilashvili")
const costumer3 = new Costumer("Mariam" , "Gogiashvili")
const costumer4 = new Costumer("Levan" , "Bibilashvili")

const myArr = [costumer1 ,costumer2 , costumer3 , costumer4]


class BestCostumer extends Costumer{
    constructor(name , surname){
        super(name , surname)
        
    }
    best(randomCostumer){
        console.log(`Welcome our best Costumer his name is ${randomCostumer.name} , he has best habbits\n${randomCostumer.name}: ${this.goodHabits()}`)
        
    }
}

const bestC = new BestCostumer()
bestC.best(myArr[Math.floor(Math.random() * myArr.length)])