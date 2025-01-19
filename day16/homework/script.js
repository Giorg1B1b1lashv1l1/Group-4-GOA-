const checkBalance = {
    greet : alert("Welcome To Bank Of Georgia , If You Want to Check Your Balance Click 'OK'"),
    user : prompt("Enter Your Name and surname: "),
    pn : prompt("Enter Your Private Number: "),
    cardNumber : prompt("Enter Your Card Number: "),
    pinCode : prompt("Enter Your Pin Code: ")
}
let randomBalance = Math.floor((Math.random() * 200) + 1);
let change = document.getElementById("num").innerHTML=randomBalance

console.log(checkBalance)