// const form = document.querySelector("form")

// const users = []
// form.addEventListener("submit" , (e)=>{
//     e.preventDefault()

//     const email = form.elements.email.value

//     const pass = form.elements.password.value

//     users.push({email , pass})

//     console.log(users)

// })


// class Person{
//     #password;
//     constructor(firstname , lastname , email , password){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.email = email
//         this.#password = password
//     }
//     get fullName(){
//         return  `${this.firstname} ${this.lastname}`
//     }

//     set changeEmail(newEmail){
//         this.email = newEmail
//     }
// }

// const person1 = new Person("Giorgi" , "Bibilashvili" ,"giorgi123@gmai.com")

// person1.changeEmail = "gbibila97@gmail.com"
// console.log(person1.fullName)
// console.log(person1.email)
// person1.#password = "1234" --------this #password field is not accessible outside of the class constructor
// console.log(person1.#password)










//Classwork//we should create person class which has 4 properties name lastname email and password and 2 methods, first method should be get method which fetches the global information  and set method which changes private field which is the password field

//Classwork
class Person{
    #password;
    constructor(name,lastname, email, password){
        this.name = name
        this.lastname = lastname
        this.email = email
        this.#password = password
    }

    get fullInfo(){
        return `user name: ${this.name}\nuser lastname: ${this.lastname}\nuser email: ${this.email}\nPassword: ${this.#password}`
    }

    set changePass(newPass){
        this.#password = newPass
    }
}

const person1 = new Person("Giorgi" , "Bibilashvili" , "bibila@gmail.com" , "gb123456")

person1.changePass = "123456789"
console.log(person1.fullInfo)