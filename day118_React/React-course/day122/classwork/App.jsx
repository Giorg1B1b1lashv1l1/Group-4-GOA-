import { useState } from "react"

function App(){
   const [task , setTask] = useState([])
    const add=()=>{
        setTask((prev)=>{
            return [...prev , "task"]
        })
    }
    return(
    <>
        <div>
            <button onClick={add}>Add Task</button>
            <ul>
                {task.map((item,index)=>{
                    return(
                        <li key={index}>{item} {index+1}</li>
                    )
                })}
            </ul>
        </div>
    </>
    )
}

export default App 