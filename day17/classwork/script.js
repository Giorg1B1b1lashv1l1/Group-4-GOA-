//Registration 1
const reg1 = document.getElementById("main")

const userName = document.getElementById("name")
const userSurname = document.getElementById("surname")
const userPassword = document.getElementById("password")

//registration 2
const reg2 = document.getElementById("main-2")

const userName2 = document.getElementById("name-2")
const userSurname2 = document.getElementById("surname-2")
const userPassword2 = document.getElementById("password-2")

let object = {
    name : userName,
    surname : userSurname,
    password : userPassword,
}

//Function
function submition(){
    if(object.name.value.length > 0 && object.surname.value.length > 0 && object.password.value.length > 0){
        userName2.innerHTML = object.name.value
        userSurname2.innerHTML = object.surname.value
        userPassword2.innerHTML = object.password.value
        reg1.style.display = "none"
        reg2.style.display = "block"
        console.log(object)
    }
}

function changePassword(){
    let confirmation = confirm("Do You Want To Change Password?")
    if(confirmation === true){
        let oldPass = prompt("Enter Your Password")
        if(oldPass === object.password.value){
            let newPass = prompt("Enter New Password")
            userPassword2.innerHTML = newPass
        }else{
            alert("Your Password Is Wrong! Try Again")
        }
    }
}