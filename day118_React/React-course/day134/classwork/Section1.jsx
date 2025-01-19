import React from 'react'
import { useContext } from 'react'
import { userContext } from './App'

function Section1() {
    const variable = useContext(userContext)
  
  return (
    <div>
      <p>{variable[0]}</p>
    </div>
  )
}

export default Section1