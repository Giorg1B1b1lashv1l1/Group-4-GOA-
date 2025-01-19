// class Human{
//     constructor(name , age , gender){
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }

//     speak(){
//         return "can speaking"
//     }
//     run(){
//         return "can running"
//     }
//     giveBirth(){
//         return "give birth"
//     }
//     coock(){
//         return "can coocking"
//     }
//     haveBeard(){
//         return " have beard"
//     }
// }

// const human = new Human("Giorgi" , 21 , "male")
// const human2 = new Human("Mariam" , 22 , "female")

// class Man extends Human{
//     constructor(name, age , gender){
//         super(name)
//         this.age = age
//         this.gender = gender
        
//     }
//     same(){
//         console.log(`men ${this.speak()} , ${this.run()} , ${this.coock()} , as a women`)
//     }
//     different(){
//        console.log(`men can't ${this.giveBirth()}`)
//     }
// }


// class Women extends Human{
//     constructor(name , age , gender){
//         super(name)
//         this.age = age
//         this.gender = gender
        
//     }
//     same2(){
//         console.log(`women ${this.speak()} , ${this.run()} , ${this.coock()} , as a men`)
//     }
//     different2(){
//         console.log(`women can't ${this.haveBeard()}`)
//     }
// }

// const man1 = new Man(human.name , human.age , human.gender)
// const woman1 = new Women(human2.name , human2.age , human2.gender)
// console.log("--------------------------man------------------------")
// console.log(man1)
// man1.same()
// man1.different()
// console.log("--------------------------woman--------------------------")
// console.log(woman1)
// woman1.same2()
// woman1.different2()


///calswork 2
class Shape{
    constructor(name ,color){
        this.name = name
        this.color = color
    }
}

const shape = new Shape("circle" , "red")
// console.log(shape.name)
 

class Circle extends Shape{
    constructor(name, color, radius){
        super(name, color)
        this.radius = radius
    }
}



 