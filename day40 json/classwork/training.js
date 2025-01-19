const input = document.getElementById("inpt")
const addBtn = document.getElementById("addbtn")
const updateBtn = document.getElementById("updatebtn")
const myUl = document.getElementById("myul")

let inputValue = ""

input.addEventListener("input" , function(e){
    inputValue = e.target.value
})

let http = new XMLHttpRequest();
http.open("GET" ,"https://jsonplaceholder.typicode.com/todos"  , true)
http.send()

http.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            let response = JSON.parse(this.responseText)
            console.log(response)
            addBtn.addEventListener("click" , function(){
                for(let i=0 ; i<response.length ; i++){
                    if(input.value == response[i].id){
                        let li = document.createElement("li")
                        li.innerHTML = response[i].title
                        myUl.appendChild(li)
                        input.value = ""
                        inputValue = ""

                    }
                }
            })
        }
    }
}   




//https://jsonplaceholder.typicode.com/todos

