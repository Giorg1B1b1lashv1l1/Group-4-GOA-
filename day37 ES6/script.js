//we should create map data structure then we should add pairs
//check and print map's every keys and values

const myMap = new Map([["Name" , "Giorgi"] , ["Surname" , "Bibilashvili"]])

myMap.set("age" , 21)
myMap.set("work" , "CEO")
myMap.set("family Condition" , "not Engaged")



console.log(myMap)
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.has("address"))
for(let [i , y] of myMap.entries()){
    console.log(`${i}: ${y}`)
}

for(let k of myMap.keys()){
    console.log(k)
}

for(let v of myMap.values()){
    console.log(v)
}