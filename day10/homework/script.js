//Homework
//მომხმარებელი შემოიტანს რიხვს თუ ის იქნება უარყოფითი რიცხვი უნდა დაგვიბრუნეოს აურყოფითი რიცხვი,თუ ის იქნება დადებითიო რიცხვი დაგვიბრუნოს მაინც უარყოფითი რიცხვი ყველა შემთხვევაში გვიბრუნებს უარყოფითს


//#2 მომხმარებელს შემოატანინეთ რიცხვი დამ რიცხვამდე ყველა რიცხვის ჯამი უნდა დავბეჭდოთ

//#1

// let userName =prompt("Enter Your Name: ")

// if(userName > 0){
//     console.log(userName * -1)
// }else if(userName < 0){
//     console.log(userName)
// }else{
//     console.log("Its Zeroo")
// }

//#2

let userNumber = prompt("Enter Your Number: ")
let sum = 0
for(let i=0 ; i<=userNumber ; i++){
    sum+=i
}
console.log(sum)

