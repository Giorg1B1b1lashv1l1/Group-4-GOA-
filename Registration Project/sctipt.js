//Header

const header = document.getElementById("main-header")
//Registration

const regName = document.getElementById("reg-name")
const regSurname = document.getElementById("reg-surname")
const regPass = document.getElementById("reg-pass")
const regForm = document.getElementById("main-reg")
const successRegistration = document.getElementById("successfully-registered")
const dontHaveAcc = document.getElementById("donthaveacc")

//log-in

const logName = document.getElementById("log-name")
const logPass = document.getElementById("log-pass")
const logForm = document.getElementById("main-log")
const accountName = document.getElementById("accname")

//Registration functions

const accName = document.getElementById("accname")

let accArr = []

function crerateAcc(name,surname,pass){
    this.name = name
    this.surname = surname
    this.pass = pass
}

function register(){
    let name = regName.value
    let surname = regSurname.value
    let pass = regPass.value

    if(name === ""){
        regName.placeholder = "Please Enter Your Name"
    }else if(surname === ""){
        regSurname.placeholder = "Please Enter Your Surname"
    }else if(pass === "" ){
        regPass.placeholder = "Please Enter Your Password"
    }else{
        const person = new crerateAcc(name,surname,pass)
        accArr.push(person)
        console.log(accArr)

        regName.value = ""
        regSurname.value = ""
        regPass.value = ""

        regForm.style.display = "none"
        successRegistration.style.display = "flex"
    }

    
}

//function which goes from sucseec registration to log-in form
function goToLogin(){
    logForm.style.display = "block"
    successRegistration.style.display = "none"
}

//function which go from registration form to log-in form 
function toLog(){
    regForm.style.display = "none"
    logForm.style.display = "block"
}

//Function which goes from login form to registration form

function toReg(){
    logForm.style.display = "none"
    regForm.style.display = "block"
}


//Log-in Functions

function logIn(){
    let name = logName.value
    let pass = logPass.value

    let isNameCorrect
    let accIndex

    if(name == ""){
        logName.placeholder = "Please Enter Your Name"
        logName.style.boxShadow = "0px 0px 3px red"
    }else{
        logName.style.boxShadow = "0px 0px 10px green"
    }
    if(pass == ""){
        logPass.placeholder = "Please Enter Your Password"
        logPass.style.boxShadow = "0px 0px 3px red"
    }else{
        logPass.style.boxShadow = "0px 0px 10px green"
        
    }

    for(let i = 0 ;i < accArr.length; i++){
        if(accArr[i].name == name){
            isNameCorrect = true
            accIndex = accArr.indexOf(accArr[i])
            accountName.innerHTML = name
        }else{
            dontHaveAcc.innerHTML = "Name or Password is inccorect"
            dontHaveAcc.style.color = "tomato"
        }
    }

    if(isNameCorrect == true){
        if(accArr[accIndex].pass == pass){
            header.style.display = "block"
            logForm.style.display = "none"
        }else{
            dontHaveAcc.innerHTML = "Name or Password is inccorect"
            dontHaveAcc.style.color = "tomato"
        }
    }


}

//exit function

function exit(){
    regForm.style.display = "block"
    header.style.display = "none"
}




















// if(name == ""){
//     logName.placeholder = "Please Enter Your Name"
//     logName.style.boxShadow = "0px 0px 3px red"
// }else{
//     logName.style.boxShadow = "0px 0px 10px green"
// }
// if(pass == ""){
//     logPass.placeholder = "Please Enter Your Password"
//     logPass.style.boxShadow = "0px 0px 3px red"
// }else{
//     logPass.style.boxShadow = "0px 0px 10px green"
    
// }

