const pName = document.getElementById("name")
const pSurname = document.getElementById("surname")
const pAge = document.getElementById("age")

const logNAme = document.getElementById("n1")
const logSurname = document.getElementById("s1")
const logAge = document.getElementById("a1")

const sectionFirst = document.getElementById("section1")
const sectionSecond = document.getElementById("section2")
const sectionThird = document.getElementById("section3")
const sectionFourth = document.getElementById("section4")
const travelInput = document.getElementById("travelinput")


const mainBody = document.getElementById("body")

const travelAge = document.getElementById("traveledage")


function person(name , surname , age){
    this.name = name
    this.surname = surname
    this.age = Number(age)
    this.timeTravel = function(travelInput){
        this.age+=Number(travelInput.value)
    }
}


function logIn(){
    const person1 = new person(pName.value , pSurname.value , pAge.value)
    logNAme.innerHTML = person1.name
    logSurname.innerHTML = person1.surname
    logAge.innerHTML = person1.age
    sectionFirst.style.display = "none"
    sectionSecond.style.display = "block"
}

function wantTravel(){
    sectionSecond.style.display = "none"
    sectionThird.style.display = "block"
    mainBody.style.background = "url(img/clockimg.jpg)"
    mainBody.style.backgroundPosition = "center"
    mainBody.style.backgroundRepeat = "no-repeat"
    mainBody.style.backgroundSize = "cover"
}

function travelTime(){
    const person1 = new person(pName.value , pSurname.value , pAge.value)
    person1.timeTravel(travelInput)
    mainBody.style.background = "url(img/time.gif)"
    mainBody.style.backgroundPosition = "center"
    mainBody.style.backgroundRepeat = "no-repeat"
    mainBody.style.backgroundSize = "cover"
    sectionThird.style.display = "none"
    sectionFourth.style.display = "block"
    travelAge.innerHTML = person1.age



    
}





