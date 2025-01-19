import React, { createContext, useContext } from 'react'
import Section1 from "/day134/classwork/Section1.jsx"
import Section2 from "/day134/classwork/Section2.jsx"
import { useState } from 'react'


const userContext = createContext()
function App() {
  const [count , setCount] = useState(0)
  return (
    <userContext.Provider value={[count , setCount]}>
      <div> 
        <Section1/>
        <Section2/>
      </div>
    </userContext.Provider>
  )
}

export {App , userContext}