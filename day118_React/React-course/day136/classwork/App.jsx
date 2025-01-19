import React from 'react'

function App() {
  return(
    <div className='w-full h-screen flex items-center justify-center'>
        <h1>Product name</h1>
        <p>Price:</p>
        <div className='flex '>
            <p>Quantity:</p>
            <div>
                <button>-</button>
                <button>+</button>
            </div>

        </div>
    </div>
  )
}

export default App