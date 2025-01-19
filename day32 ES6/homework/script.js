//constants
const formRegistration = document.getElementsByClassName("registration")
const formAuthorisation = document.getElementsByClassName("login")

let logtag = document.getElementById("logintag")
let signtag = document.getElementById("signuptag")


class Registration{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    get fullInfo(){
        return `name: ${this.name}\nemail: ${this.email}\nPassword: ${this.password}`;
    }

    set changePassword(newpassword){
        this.password = newpassword
    }
}
//registration
const regForm = document.getElementsByClassName("register")
const users = []

regForm[0].addEventListener("submit", (e)  => {
    e.preventDefault()
    const name = regForm[0].elements.name.value
    const email = regForm[0].elements.email.value
    const password = regForm[0].elements.password.value
    const user = new Registration(name, email, password)
    console.log(user.fullInfo)
    users.push(user)
    console.log(users)

    formRegistration[0].style.display = "none"
    formAuthorisation[0].style.display = "flex"
})


logtag.addEventListener("click" , (e) => {
    e.preventDefault()
    formRegistration[0].style.display = "none"
    formAuthorisation[0].style.display = "flex"
})

signtag.addEventListener("click", (e) => {
    e.preventDefault()
    formAuthorisation[0].style.display = "none"
    formRegistration[0].style.display = "flex"
})


//login

const loged = document.getElementById("logedin")
const signform = document.getElementsByClassName("log-in")
const succsesfully = document.getElementsByClassName("signinsuccses")

loged.addEventListener("click" , (e)=>{
    e.preventDefault()
    const logemail = signform[0].elements.emaillogin.value
    const logpass = signform[0].elements.passwordlogin.value
    for(let i=0 ; i < users.length ; i++){
        if(users[i].email === logemail &&  users[i].password === logpass ){
            console.log("sign in succsesfully")
            formAuthorisation[0].style.display = "none"
            succsesfully[0].style.display = "flex"
        }else if(users[i].email != logemail){
            alert("email is inccorect")
        }else if(users[i].password != logpass){
            alert("password is inccorect")
        }
    }
})








