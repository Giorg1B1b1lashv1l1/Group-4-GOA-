// DOM 
// Document Objecr Model

// let userName

// document.body.innerHTML="Hello world"

// let score=Number(prompt("Enter Score: "))
// if(score > 80){
//     document.body.innerHTML="good job!!"
// }

// let h1= document.getElementById("title")

// document.body.innerHTML= "Group 4 Best"

//Homework

let userScore=prompt("Enter Your Score")

if(userScore <= 20){
    document.getElementById("score").innerHTML="Your Score Is Low"
}else if(userScore >= 20 && userScore <= 50){
    document.getElementById("score").innerHTML="Your Score Is Medium"
}else if(userScore >= 50 && userScore <= 70){
    document.getElementById("score").innerHTML="Your Score Is High"
}else if(userScore >= 70 && userScore <= 99){
    document.getElementById("score").innerHTML="Good Job!!"
}else if(userScore == 100){
    document.getElementById("score").innerHTML="Congratulation You are Chad!"
}

