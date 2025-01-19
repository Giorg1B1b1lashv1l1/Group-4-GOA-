const input = document.getElementById("inpt")
const addBtn = document.getElementById("addbtn")
const updateBtn = document.getElementById("updatebtn")
const myUl = document.getElementById("myul")

let inputValue = ""

input.addEventListener("input" , function(e){
    inputValue = e.target.value
})


const addTitles = (id,title)=>{
    let li = document.createElement("li")
    li.id = id
    li.innerHTML = title
    myUl.appendChild(li)
}


function checkBtnn(id , complete ){
    let checkBtn = document.createElement("button")
    checkBtn.className = id
    checkBtn.innerHTML = "Check"
    myUl.appendChild(checkBtn)
    checkBtn.addEventListener("click",function(){
        if(complete == true){
            checkBtn.innerHTML = "Completed!"
            checkBtn.style.color = "green"

        }else if(complete == false){
            checkBtn.innerHTML = " Not completed!"
            checkBtn.style.color = "red"
        }
    })
}


function getInfo(){
    let http = new XMLHttpRequest();
    http.open("GET" ,"https://jsonplaceholder.typicode.com/todos"  , true)
    http.send()
    
    http.onreadystatechange = function(){
        if(this.readyState== 4){
            if(this.status == 200){
                let response = JSON.parse(this.responseText)
                console.log(response)
                response.map((item) => {
                    addTitles(item.id , item.title)
                    checkBtnn(item.id , item.completed)
                })
                
                
                
            }
        }
    }
    
}



updateBtn.addEventListener("click" , getInfo)


function createTodoItemAtBackEnd(){
    let obj = {
        "userId" : 201,
        "title" : inputValue,
        "completed" : false
    }

    let stringedObj = JSON.stringify(obj)

    let http = new XMLHttpRequest()

    http.open("POST" , "https://jsonplaceholder.typicode.com/todos")

    http.send(stringedObj)

    http.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 201){
                let response = this.responseText
                let parsedResponse = JSON.parse(response)
                addBtn.addEventListener("click" , ()=>{
                    checkBtnn(20 , obj.completed)
                    parsedResponse.id ++
                    addTitles(parsedResponse.id , inputValue)
                    inputValue = ""
                    input.value = ""
                })

            }
        }
    }
}

createTodoItemAtBackEnd()



//https://jsonplaceholder.typicode.com/todos
