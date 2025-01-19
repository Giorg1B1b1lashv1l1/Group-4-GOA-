import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/index.css"
// import App from '../day122/classwork/App'
// import App from "../day122/homework/App"
// import App from "../day123/classwork/App.jsx"
// import App from "../day124/classwork/App.jsx"
// import {App} from "../day134/classwork/App.jsx"
// import App from '../day135/classwork/App'
import App from '../day136/classwork/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
