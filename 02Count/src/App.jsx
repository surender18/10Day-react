import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)
  // let counter=10
   const addValue=()=>{
    // console.log("value Added",Math.random());
 
    // counter++;
    setCounter(counter+1)
    console.log("clicked",counter);
   }
   const removeValue=()=>{
    setCounter(counter-1)
    console.log("clicked",counter);
   }

   
   
  return (
    <>
     <h1>Chai Aur React</h1>
     <h3>Counter Value:{counter}</h3>
     <button onClick={addValue}>Add Value{counter}</button>
     <br />
     <button
     onClick={removeValue}>Delete Value</button>
     <footer>Final Count{counter}</footer>
    </>
  )
}

export default App
