// Objects oriented progrraming
//oop

// let user = {
//     name: "giorgi",
//     surname : "bibila",
//     adress : "gorski"
// }

// console.log(user)

//classwork
// const bank = {
//     user : prompt("Enter Your Name And Surname "),
//     pn : prompt("Enter your Private Number "),
//     cardNumber : prompt("Enter Your Card Number : "),
//     pinCode : prompt("Enter Your Pin Code: ")
// }

// console.log("მომხმარებელი: " +  bank.user + "\n" + "მომხმარებლის პირადი ნომერი: " + bank.pn + "\n" +"მომხმარებლის ბარათს ნომერი: " + bank.cardNumber + "\n" +"მომხმარებლის Pin Code: " + bank.pinCode)



//confirm()

// let num = confirm('hello')
// console.log(num)


let changePass = {
    user : prompt("Enter Your Name And Surname"),
    id : prompt("Enter Your Id "),
    cardNumber : prompt("Enter Your Card Number") ,
    password : prompt("Enter Your Password")
}
changePassword = confirm("Your Password Is to Weak , Do you want To Change it?")

if(changePassword === true){
    let newPassword = prompt("Enter New Password: ")
    changePass.password = newPassword
    console.log("Your New Password is : " + newPassword)
}else{
    console.log("You must change your shit password :))))))")
}

