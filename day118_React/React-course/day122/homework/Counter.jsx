import React , {useState} from "react"
import "./counter.css"

function Counter(){

    const [count , setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count-1)
    }

    const reset = ()=>{
        setCount(0)
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button f" onClick={decrement}>Decrement</button>
            <button className="counter-button s" onClick={reset}>Reset</button>
            <button className="counter-button t" onClick={increment}>Increment</button>

            
        </div>
    )

}

export default Counter