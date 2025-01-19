import React , {useState} from "react"

function Component(){
    const [name , setName] = useState("Guest")
    const [age , setAge] = useState(0)
    const [isEmployed , setIsempoyed] = useState(false)

    const updateName = ()=>{
        setName("bibila".toUpperCase())
    }

    const increment = ()=>{
        setAge(age+1)
    }   

    const toggleemloyed = ()=>{
        setIsempoyed(!isEmployed)
    }

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={increment}>increment Age</button>

            <p>is Employed : {isEmployed? "Yes" : "NO"}</p>
            <button onClick={toggleemloyed}>toggle status</button>
        </div>
    )
}

export default Component