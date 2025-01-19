import React from 'react'
import { useRef } from 'react'


function App() {
    // const inputRef = useRef(null)
    // const pRef = useRef(null)

    const plusRef = useRef(null)
    const minusRef = useRef(null)
    const valueRef = useRef(0)

    let num = 0

  return (
    // <div>
    //     <input ref={inputRef} type="text" />
    //     <button onClick={()=>{
    //         console.log(inputRef.current.value)
    //         console.log(pRef.current.textContent)
    //         pRef.current.innerHTML = inputRef.current.value
    //     }}>Add</button>
    //     <div>
    //         <p ref={pRef}></p>
    //     </div>
    // </div>

    <div>
        <p ref={valueRef}>0</p>
        <div>
            <button onClick={()=>{
                valueRef.current.innerHTML=num+=1
            }}>+</button>
            <button onClick={()=>{
                valueRef.current.innerHTML=num-=1
            }}>-</button>
        </div>
    </div>
  )
}

export default App