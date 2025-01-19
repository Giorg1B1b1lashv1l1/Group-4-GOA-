const leftButton = document.getElementById("left-btn")
const rightButton = document.getElementById("right-btn")

const userName = document.getElementById("name")
const picture = document.getElementById("pic")
const aboutUser = document.getElementById("abouttxt")

let myArr = []

function profileObject(name,pic,about){
    this.name = name;
    this.pic = pic;
    this.about = about;
}

const person1 = new profileObject(
    "Giorgi Bibilashvili",
    "img/giorgi.jpg",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui voluptatem porro cumque perspiciatis asperiores ipsam tenetur mollitia, commodi nam culpa perferendis quas nesciunt officiis, quos eos debitis sunt."
)
    
const person2 = new profileObject(
    "Lika Pruidze",
    "img/lika.PNG",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui voluptatem porro cumque perspiciatis asperiores ipsam tenetur mollitia, commodi nam culpa perferendis quas nesciunt officiis, quos eos debitis sunt."
)

const person3 = new profileObject(
    "Gabriel Molodini",
    "img/gabrieli.jpg",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui voluptatem porro cumque perspiciatis asperiores ipsam tenetur mollitia, commodi nam culpa perferendis quas nesciunt officiis, quos eos debitis sunt."
)

const person4 = new profileObject(
    "Temur Solomnishvili",
    "img/temuri.jpg",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui voluptatem porro cumque perspiciatis asperiores ipsam tenetur mollitia, commodi nam culpa perferendis quas nesciunt officiis, quos eos debitis sunt."
)

const person5 = new profileObject(
    "Rostom Chagunava",
    "img/rostomi.jpg",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui voluptatem porro cumque perspiciatis asperiores ipsam tenetur mollitia, commodi nam culpa perferendis quas nesciunt officiis, quos eos debitis sunt."
)

const person6 = new profileObject(
    "Merab Tstitskhvaia",
    "img/merabi.jpg",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui voluptatem porro cumque perspiciatis asperiores ipsam tenetur mollitia, commodi nam culpa perferendis quas nesciunt officiis, quos eos debitis sunt."
)

myArr.push(person1,person2,person3,person4,person5,person6)
// myArr.push(person1)


let indexx = 0
leftButton.addEventListener("click"  , function(){
    indexx--
    if(indexx < 0){
        indexx = myArr.length -1
    }
    userName.innerHTML = myArr[indexx].name
})

rightButton.addEventListener("click" , function(){
    indexx++
    if(indexx > myArr.length - 1){
        indexx=0
    }
    console.log(myArr[indexx].name)
    userName.innerHTML = myArr[indexx].name
})

// console.log(myArr[0].name)




