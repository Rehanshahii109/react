import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const [counter, setCounter] = useState(15)
 
  // let counter = 15

  let addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removevalue = () => {
    console.log("clicked", counter);
    // counter = counter - 1
    setCounter(counter - 1)
  }

  return (
    <>
      
     <h1>chai aur code</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>add value {counter}</button>
     <br />
     <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
