// 2) შექმენით ინფუთი საიდანაც მომხმარებელი შეძლებს რომ შეიყვანოს სახელი შემდეგ კი დაამატეთ ერთი ღილაკი როდესაც მომხმარებელი დააჭერს ამ ღილაკს მომხმარებლის შეტანილი ინფორმაცია გამოჩნდეს სხვა პარაგრაფში, ასევე დაამატეთ გასუფთავების ღილაკი როდესაც მას დავაჭერთ ინფუთი უნდა გასუფთავდეს

import React , {useState} from "react"


function App() {
    const [arr , setArr] = useState([])

    const add = ()=>{
      setArr((prev)=>{
        return [...prev , 'item']
      })
    }  
    return (
      <div>

        <button onClick={add}>Add item</button>
        { 
          arr.map((item , index)=>{
          return <li>{item} {index}</li>
          })
        }
      </div>
    )

  
}

function App(){
  
}


export default App