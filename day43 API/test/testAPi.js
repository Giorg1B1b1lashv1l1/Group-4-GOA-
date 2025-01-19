const search = document.getElementById("Search")
const searchBtn = document.getElementById("SearchBtn")
const infoDiv = document.getElementById("content2")

let searchValue = ""

search.addEventListener("input" , (e)=>{
    searchValue = e.target.value
    console.log(searchValue)
})




let http = new XMLHttpRequest
http.open("GET" , "https://datausa.io/api/data?drilldowns=Nation&measures=Population")
http.send()

// console.log(http)

http.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            let response = JSON.parse(http.response)
            searchBtn.addEventListener("click" , ()=>{
                response.data.map((item)=>{
                    if(item.Year === searchValue){
                        console.log("good")
                        let p  = document.createElement("p")
                        p.innerHTML = `Population of USA in ${searchValue} : ${item.Population}`;
                        infoDiv.appendChild(p)
                    }
                })
                
            })
            console.log( response)
        }
    }
}