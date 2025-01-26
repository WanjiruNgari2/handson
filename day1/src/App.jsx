import { useState } from 'react'
import img from './assets/store.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  alert("You clicked on this button " + count + " times" )




return (
      <div className='pagecontainer'>
      <h1>DAY I HANDSON EXERCISE</h1> <br></br> 
      <div className=" messagebox">
      <img src={img}  className="image" alt="store picture" />
        
        <div className='button'>
        <button onClick={() => setCount((count) => count + 1)}>
        Click here:    {count}
         </button>
          </div>
      </div>
      </div>
  )
}

export default App
