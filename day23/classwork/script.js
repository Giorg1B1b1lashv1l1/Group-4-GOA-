const addBtn = document.getElementById("addbtn")
const uList = document.getElementById("ulist")
const photoo = document.getElementById("photo")

addBtn.addEventListener("click" , function(){
    let li = document.createElement("li")
    let image = document.createElement('img')

    image.src = photoo.src
    image.width = "200"
    li.appendChild(image)
    uList.appendChild(li)
})