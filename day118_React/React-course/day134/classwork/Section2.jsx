import React from 'react'
import { useContext } from 'react'
import { userContext} from './App'

function Section2() {
  const variable = useContext(userContext)

  return (
   <>
       <button onClick={()=>{
      variable[1](variable[0]+1)
    }}>Increase</button>

    <button onClick={()=>{
      variable[1](variable[0]-1)
    }}>Decrease</button>
   
   </>
  )
}

export default Section2