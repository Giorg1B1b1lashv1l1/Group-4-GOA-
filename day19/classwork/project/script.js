const regName = document.getElementById("reg-name")
const regPass = document.getElementById("reg-pass")

const logName = document.getElementById("log-name")
const logPass = document.getElementById("log-pass")

const accName = document.getElementById("accname")

const alert = document.getElementById("alertt")

const loginForm = document.getElementById("loginform")

let acc = []

function createAcc(name,pass){
    this.name = name
    this.pass = pass
}

function register(){
    let name = regName.value
    let pass = regPass.value

    const person = new createAcc(name , pass)
    acc.push(person)

    console.log(acc)
}


function logIn(){
    let name = logName.value
    let pass = logPass.value

    for(let i = 0 ; i < acc.length ; i++){
        if(acc[i].name == name){
            if(pass == acc[i].pass){
                accName.innerHTML = acc[i].name
            }
        }else{
            alert.innerHTML = "Account Name Is Incorrect"
            alert.style.color = "tomato"
            loginForm.style.boxShadow = "0px 0px 10px tomato"
        }
        console.log(acc[i])
    }

}



