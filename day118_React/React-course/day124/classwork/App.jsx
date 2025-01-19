import React , {useState} from "react"

function App(){
    const [data , setData] = useState([])

    const[name , setName] = useState("")
    const[surname , setSurame] = useState("")
    const[email , setEmail] = useState("")
    const[pass , setPass] = useState("")
    
    const handleChange = (e)=>{
        if(e.target.name == "name"){
            setName(e.target.value)
        }else if(e.target.name == "surname"){
            setSurame(e.target.value)


        }else if(e.target.name == "email"){
            setEmail(e.target.value)


        }else if(e.target.name == "password"){
            setPass(e.target.value)


        }
    }

    const submitFunc = (e)=>{
        e.preventDefault()
        setData([name,surname,email,pass])
        
    }

    const clear = (e)=>{
        e.preventDefault()
        setName("")
        setSurame("")
        setEmail("")
        setPass("")
        setData([])
    }

    return(
        
        <>
            <form>
                <input onChange={handleChange} type="text" name="name" style={{border:"1px solid black"}} placeholder="name" />
                <br />
                <br />
                <input onChange={handleChange} type="text" name="surname" style={{border:"1px solid black"}} placeholder="surname" />
                <br />
                <br />
                <input onChange={handleChange} type="text" placeholder="email" name="email" style={{border:"1px solid black"}} />
                <br />
                <br />
                <input onChange={handleChange} type="password" placeholder="password" name="password" style={{border:"1px solid black"}} />
                <button onClick={submitFunc}>Submit</button>
                <button onDoubleClick={clear}>CA</button>
            </form>
            <br /><br />
            <div>
                <p>Name:{data[0]}</p>
                <br />
                <p>Surname:{data[1]}</p>
                <br />
                <p>email:{data[2]}</p>
                <br />
                <p>Password:{data[3]}</p>
                <br />
            </div>
        </>
    )
}

export default App